// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead
 * of the number and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”
 *
 */

const Numbers1to100 = () => {
    let array = []
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) array.push('FizzBuzz');
        else if (i % 3 === 0) array.push('Fizz');
        else if (i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }
    return array;
}


export default function handler(req, res) {
    res.status(200).json({ name: Numbers1to100() });
}