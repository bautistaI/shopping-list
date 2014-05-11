$(document).ready(function() {
	// use enter to add list items
	$('#enter-item').keyup(function(e){
		if(event.keyCode === 13) {
			e.preventDefault();
			$('#add-item').click();
		}
	});
	// Do a function that captures the input value, appends it to the list of items, adds the qty, trash and done options, and clears the input
	function addItem(){
		$('#add-item').on('click', function(){
			var inputValue = $('#enter-item').find('input').val(); // stored the input value inside the variable inputValue
			if(!$.trim(inputValue)){
				alert('Ooops! you forgot to enter an item!');
			}else{
				$('.display-items').find('ul').append("<li>" + "<span class='item-description item'>" + "&#10095;" + "&#10095;" + " " + $.trim(inputValue) + "</span>" +  " <button class='completed-item'>done</button>" + " <button class='delete'></button>" + ' <span class="enter-quantity">Qty: <input class="qty" type="number" value="1" name="qty" min="1" max="100"></span>' + "</li>");
			}
			$('#enter-item input').val('');
		});
		// Delete item from the DOM
		$('.enter-items-form').on('click', '.delete', function(){
			$(this).closest('li').fadeOut('normal');
		});
		// Add completed class to completed items
		$('.enter-items-form').on('click', '.completed-item', function(){
			$(this).closest('li').toggleClass('completed');
		});
	}
	// init function addItem
	addItem();
});