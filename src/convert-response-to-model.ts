class Model {
  public a: number;
  public b: string;
  public c: number[];
}

// tslint:disable-next-line: max-classes-per-file
class Convertor {
    public static convert(response: any): Model {
    const out = new Model();
    out.a = response.a;
    out.b = response.b;
    out.c = response.c;

    return out;
  }
}

export function convertResponseToModel() {
  const response = {
    a: 1,
    b: '2',
    c: [1, 2, 3],
    d: 'extra',
  };

  console.log(Convertor.convert(response));
}
