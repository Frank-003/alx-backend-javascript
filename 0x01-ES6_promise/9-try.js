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
