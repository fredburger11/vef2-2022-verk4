import React from 'react';

// Component
export function UncontrolledFormDom() {

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const inputs =
        Array
          .from(e.target.querySelectorAll('input'))
          .map((input) => `${input.name} = ${input.value}`);
  
      alert(inputs.join(', '));
    }
  
    return (
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Notendanafn: <input name="name" type="text" /></label>
        <label>Lykilorð: <input name="password" type="text" /></label>
        <button>Innskrá</button>
      </form>
    );
  }
