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
    this.weekdays = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];//sunday and saturday there is no restriccion
    this.restrictedHours = [
      ["07:00", "09:30"],//morning hours
      ["16:00", "19:30"],//evening hours
    ];
  }

  private isRestrictedHour(time: string): boolean {
    const [
      [morningStart, morningEnd],
      [eveningStart, eveningEnd],
    ] = this.restrictedHours;

    return (
      (time >= morningStart && time <= morningEnd) ||
      (time >= eveningStart && time <= eveningEnd)
    );
  }

  private getDayNumber(date: string): number {
    return getDay(parseISO(date));//obtain the number of the day that the user input
  }

  private getLastDigitIndex(plate: string): number {
    return this.weekdays.findIndex((day) => {
      const lastDigit = parseInt(plate[plate.length - 1]);

      return day.includes(lastDigit);
    });
  }

  public hasRestriction(formFields: FormFields): boolean {
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
