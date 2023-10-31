export interface IStation {
  namen: {
    lang: string;
  };
  code: string;
}

export interface IDepartures {
  departures: ITrain[];
}
export interface ITrain {
  direction: string;
  plannedDateTime?: string;
  departure?: string;
}
