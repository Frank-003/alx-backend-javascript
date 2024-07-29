def updateUniqueItems(groceries):
    if not isinstance(groceries, dict):
        raise ValueError("Cannot process")
    
    for item, quantity in groceries.items():
        if quantity == 1:
            groceries[item] = 100
    
    return groceries

# Example usage:
groceries = {
    "Apples": 10,
    "Tomatoes": 10,
    "Pasta": 1,
    "Rice": 1,
    "Banana": 5
}

updated_groceries = updateUniqueItems(groceries)
print(updated_groceries)
# Output: {'Apples': 10, 'Tomatoes': 10, 'Pasta': 100, 'Rice': 100, 'Banana': 5}

