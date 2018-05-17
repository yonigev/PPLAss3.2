import * as assert from "assert";
import {evalParse4} from './L4-eval-box';

assert.deepEqual(evalParse4(`
(L4 (define loop (lambda (x) (loop x)))
    ((lambda ((f lazy)) 1) (loop 0)))`),
    1);
assert.deepEqual(evalParse4(`
    (L4 (if ((lambda ((x lazy)) (= x 10)) 10) #t #f))`),
        true);





assert.deepEqual(evalParse4(`
(L4 (define loop (lambda (x) (loop x)))
    ((lambda ((f lazy)) 1) (loop 0)))`),1);

assert.deepEqual(evalParse4(`
    (L4 (define f 
        (lambda (a (b lazy))
          a))
       
      (f 1 (/ 1 0)))`),1);

assert.deepEqual(evalParse4(`
      (L4
        
(define loop
    (lambda (x)
      (loop x)))

  
    ((lambda (x)
      ((lambda ((y lazy))
        (if (= x 0)
            1
            y))
      (loop 0))
    )0))`),1);