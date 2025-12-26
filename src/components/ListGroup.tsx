import React, { useState } from "react";

interface StudentCity {
  id: number;
  code: string;
  city: string;
}

interface ListGroupProps {
  heading: string;
  items: StudentCity[];
  onItemClick?: (item: StudentCity) => void;
}

const ListGroup: React.FC<ListGroupProps> = ({ heading, items, onItemClick }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (items.length === 0) return <p>No data available.</p>;

  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              "list-group-item" +
              (selectedIndex === index ? " active" : "")
            }
            onClick={() => {
              setSelectedIndex(index);
              onItemClick?.(item);
            }}
          >
            {item.id} - {item.code} - {item.city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
