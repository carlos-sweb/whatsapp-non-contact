var options = '';

contrycodes.forEach(function(contrycode){
   options += '<option value=\''+contrycode.code+'\'>'+contrycode.contry+'&nbsp;/&nbsp;'+contrycode.code+'</option>'
}) 

document.getElementById('codecontry').innerHTML=options;

document.getElementById('btnopen').addEventListener('click', function(){	
			var codecontry = document.getElementById('codecontry').value;
			var phone = document.getElementById('phone').value;
			var phonefull = codecontry+phone;
			window.open("whatsapp://send/?phone="+phonefull+"")
});