function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Начинай добавлять вещи в список 🚀</em>
        </p>
      );
  
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "Ты всё упаковал! ✈"
            : `👜 Что у тебя есть ${numItems}, что уже упаковал ${numPacked}(${percentage}
          %)`}
        </em>
      </footer>
    );
  }

  export default Stats