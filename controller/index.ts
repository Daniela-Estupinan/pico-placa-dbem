import getDay from "date-fns/getDay";
import parseISO from "date-fns/parseISO";

export interface FormFields {
  plate: string;
  date: string;
  time: string;
}

class Validator {
  private weekdays: number[][];
  private restrictedHours: string[][];

  constructor() {
    this.weekdays = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
    this.restrictedHours = [
      ["07:00", "09:30"],
      ["16:00", "19:30"],
    ];
  }

  private isRestrictedHour(time: string): boolean {
    const [
      [morningStart, morningEnd],
      [nightStart, nightEnd],
    ] = this.restrictedHours;

    return (
      (time >= morningStart && time <= morningEnd) ||
      (time >= nightStart && time <= nightEnd)
    );
  }

  private getDayNumber(date: string): number {
    return getDay(parseISO(date));
  }

  private getLastDigitIndex(plate: string): number {
    return this.weekdays.findIndex((day) => {
      const lastDigit = parseInt(plate[plate.length - 1]);

      return day.includes(lastDigit);
    });
  }

  public hasPeakAndPlate(formFields: FormFields): boolean {
    const dayNumber = this.getDayNumber(formFields.date);
    const lastDigitIndex = this.getLastDigitIndex(formFields.plate);

    if (
      this.isRestrictedHour(formFields.time) &&
      lastDigitIndex === dayNumber
    ) {
      return true;
    }

    return false;
  }
}

export default Validator;
