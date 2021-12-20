import React from 'react'
import JournalEntry from './JournalEntry'

const JournalEntries = () => {
    const entries = [1,2,3]
    return (
        <div className="journal__entries">
            {
            entries.map(e=>(<JournalEntry key={e}/>))}
        </div>
    )
}

export default JournalEntries
