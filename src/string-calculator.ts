class StringCalculator {
    add(numbers: string): number {
        if (numbers === "") {
            return 0;
        }
        
        if (numbers.startsWith("//")) {
            const delimiter = numbers[2];
            numbers = numbers.substring(4).replace(new RegExp(delimiter, 'g'), ',');
        }

        numbers = numbers.replace(/\n/g, ',');
        const numList = numbers.split(',').map(num => parseInt(num, 10));
        
        const negatives = numList.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }

        return numList.reduce((sum, num) => sum + num, 0);
    }
}

export default StringCalculator;

