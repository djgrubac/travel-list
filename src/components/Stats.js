import React from 'react'

const Stats = ({ items }) => {
    if (!items.length) return <p className='stats'><em>Start adding items on your packing list 🚀 </em></p>
  
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className='stats'>
        {percentage === 100 ? 'You got everything! Ready to go ✈️' :
          <em>
            {`💼 You have ${numItems} item on your list, and you already packed ${numPacked} (${percentage}%).`}
          </em>
        }
      </footer>
    )
  }

export default Stats