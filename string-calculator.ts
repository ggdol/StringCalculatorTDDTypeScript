export class StringCalculator {
    public add(input: string) {
        if (input.length === 0) return 0;
        let delimiter: string | RegExp = /,|\n/;
        if (this.hasCustomDelimiter(input)) {
            delimiter = this.extractCustomDelimiter(input);
            input = this.removeCustomDelimiterHeader(input);
        }
        let parsedNumbers = this.parsNumbers(input, delimiter);
        this.throwIfAnyNegativeNumbers(parsedNumbers);
        parsedNumbers = parsedNumbers.filter(n => n <= 1000);
        return this.sumTotal(parsedNumbers);
    }
    hasCustomDelimiter(input: string) {
        return input.startsWith("//");
    }
    extractCustomDelimiter(input: string): string | RegExp {
        return input[2];
    }
    removeCustomDelimiterHeader(input: string): string {
        return input.slice(3);
    }
    parsNumbers(input: string, delimiter: string | RegExp) {
        return input.split(delimiter).map(s => Number.parseInt(s));
    }
    throwIfAnyNegativeNumbers(parsedNumbers: any) {
        const negativeNumbers = parsedNumbers.filter(n => n <0);
        if(negativeNumbers.length>0){
            throw "negatives not allowed: "+negativeNumbers.join(",");
        }
    }
    sumTotal(parsedNumbers: any) {
        return parsedNumbers.redue((n, total) => total+n);
    }

}