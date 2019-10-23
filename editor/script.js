function editText() {
    var text = document.querySelector(".text"),
        editBtn = document.querySelector('.edit'),
        saveBtn = document.querySelector('.save'),
        cancelBtn = document.querySelector('.cancel');
        text.textContent = localStorage.getItem('text');
        var textItem = text.textContent;
        localStorage.setItem('oldText', textItem);

        function activeEditing() {
            editBtn.setAttribute('disabled', '');
            saveBtn.removeAttribute('disabled');
            cancelBtn.removeAttribute('disabled');
        }

        function inactiveEditing() {
            editBtn.removeAttribute('disabled');
            saveBtn.setAttribute('disabled', '');
            cancelBtn.setAttribute('disabled', '');
        }

        editBtn.addEventListener('click', function() {
            text.setAttribute('contentEditable', true);
            activeEditing();
        });

        saveBtn.addEventListener('click', function() {
            text.setAttribute('contentEditable', false);
            inactiveEditing();
            var newText = text.textContent;
            var oldText = localStorage.getItem('text');
            localStorage.setItem('oldText', oldText);
            localStorage.setItem("text", newText);
        });

        cancelBtn.addEventListener('click', function() {
            text.setAttribute('contentEditable', false);
            inactiveEditing();
            text.textContent = localStorage.getItem('oldText');
            localStorage.setItem('text', text.textContent);
        });
}

editText();