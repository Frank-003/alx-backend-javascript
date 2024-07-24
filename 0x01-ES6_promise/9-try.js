function guardrail(mathFunction) {
    const queue = [];

    try {
        // Execute the math function and push the result to the queue
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        // If an error occurs, push the error message to the queue
        queue.push(error.message);
    } finally {
        // Always push the guardrail message to the queue
        queue.push('Guardrail was processed');
    }

    return queue;
}

// Example usage:
function exampleFunction() {
    return 1000;
}

function errorFunction() {
    throw new Error('Something went wrong!');
}

console.log(guardrail(exampleFunction));
// Output: [1000, 'Guardrail was processed']

console.log(guardrail(errorFunction));
// Output: ['Something went wrong!', 'Guardrail was processed']

