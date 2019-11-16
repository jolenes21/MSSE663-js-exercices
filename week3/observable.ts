import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source = of(["male","female"]);

const sourceAdd = source.pipe(map(list => list + "non-binary"));

//const source = of(["male","female","non-binary"])
//    return 'male';

const subscribe = sourceAdd.subscribe(list => console.log(list));