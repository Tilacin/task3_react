import React, { useState } from 'react'

import Item from './Item';

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if (sortBy === "input") sortedItems = items;
  
    if (sortBy === "description") {
      let collator = new Intl.Collator();
      sortedItems = items
        .slice()
        .sort((a, b) => collator.compare(a.description, b.description));
    }
    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul className="list ul">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Сортировка по порядку ввода</option>
            <option value="description">Сортировка по алфавиту</option>
            <option value="packed">Сортировка упакованных вещей</option>
          </select>
          <button onClick={onClearList}>Очистить список</button>
        </div>
      </div>
    );
  }

export default PackingList