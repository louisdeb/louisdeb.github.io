window.onload = function()
{
	setAvailable();
	setUnavailable();
}

function setAvailable()
{
	var availableMessage = 'available :)';

	var classArray = document.getElementsByClassName('available');
	for(var i = 0; i < classArray.length; i++)
	{
		classArray[i].innerHTML = availableMessage;
	}
}

function setUnavailable()
{
	var unavailableMessage = 'not available :(';

	var classArray = document.getElementsByClassName('not-available');
	for(var i = 0; i < classArray.length; i++)
	{
		classArray[i].innerHTML= unavailableMessage;
	}
}