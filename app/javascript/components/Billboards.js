import React from 'react';

const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>Top Music Now</h1>
      <a href="/billboards/new">Add Music to List</a>
      { billboards.map( (billboard) => (
        <>
        <h3>{billboard.name}</h3>
        <a href={`/billboards/${billboard.id}`}>Show</a>
        <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
        <a href={`/billboards/${billboard.id}`} data-method='delete'>
          Delete
        </a>
        </>
      ) ) } 
  </>
  )
      }


export default Billboards;