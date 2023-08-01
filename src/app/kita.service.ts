import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

// Properties im Backend-Objekt:
//
// id (number)
// name (string)
// datum (number[])
//
// name und datum können null sein oder nicht existieren

export interface Kita {
  // TODO
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapIncoming(incoming: any): Kita {
  return {
    // TODO
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapOutgoing(outgoing: Kita): any {
  return {
    // TODO
  };
}

// TODO: Funktion zum Mappen von Backend-Datum zu Date

@Injectable({ providedIn: 'root' })
export class KitaService {
  get(): Observable<Kita> {
    const incoming = {
      id: 1,
      name: null,
      datum: [2023, 1, 1],
    };

    return of(incoming).pipe(map(mapIncoming));
  }

  put(kita: Kita) {
    console.log(mapOutgoing(kita));
  }
}
