// filepath: /c:/Users/Skyla/Desktop/Portfolio/portfolio-website/my-react-app/src/components/Footer.js
import React from 'react';

function Footer() {
  const footerColumns = [
    {
      title: 'Column 1',
      items: ['Item 1', 'Item 2', 'Item 3']
    },
    {
      title: 'Column 2',
      items: ['Item 4', 'Item 5', 'Item 6']
    },
    {
      title: 'Column 3',
      items: ['Item 7', 'Item 8', 'Item 9']
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerColumns.map((column, index) => (
          <div key={index} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;