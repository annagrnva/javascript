const inputText = document.querySelector("#inputText");
const resultForm = document.querySelector("#result-form")
const result = document.querySelector("#result");
  
  
let count = 1;

resultForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = inputText.value;
  	if (inputValue.length === 0){
			return 
    }
  
  	const row = document.createElement('div');
  	
  	row.innerHTML = `
      <div>
        <span>${inputValue}</span>
        <button class="row-delete-button-${count}">Delete</button>	
      </div>
     `

    result.appendChild(row)

  	const rowDeleteButton = document.querySelector(`.row-delete-button-${count}`)    
    
    rowDeleteButton.addEventListener('click', () => {
      row.remove();
      count--
    })
    
		count++  
    inputText.value = "";

    // const deleteButton = row.querySelector('.row-delete-button');
  
  	// deleteButton.addEventListener('click', () => {
	// 		row.remove();
    // })

});

