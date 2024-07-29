def cleanSet(input_set, start_string):
    result = []
    for value in input_set:
        if value.startswith(start_string):
            result.append(value[len(start_string):])
    return '-'.join(result)

# Example usage:
example_set = {"apple", "apricot", "banana", "apartment", "ape"}
start_string = "ap"
print(cleanSet(example_set, start_string))  # Output: "ple-ricot-artment-e"

