import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export const source = of(["male","female","non-binary"]);

source.subscribe(list => console.log(list));