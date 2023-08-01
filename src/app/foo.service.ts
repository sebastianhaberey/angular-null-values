import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

// Properties vom Backend sind: id (number), name (string), datum (number[])

export interface Foo {
  // TODO
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapIncoming(incoming: any): Foo {
  return {
    // TODO
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapOutgoing(outgoing: Foo): any {
  return {
    // TODO
  };
}

// TODO: Funktion zum Mappen von Backend-Datum zu Date

@Injectable({ providedIn: 'root' })
export class FooService {
  get(): Observable<Foo> {
    const incoming = {
      id: 1,
      name: null,
      datum: [2023, 1, 1],
    };

    return of(incoming).pipe(map(mapIncoming));
  }

  put(kita: Foo) {
    console.log(mapOutgoing(kita));
  }
}
