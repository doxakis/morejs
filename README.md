# common.js
Common code you certainly write every time on your websites.

It makes it easier to work with common JavaScript library and it fixes common problems.

The only requirement: the jQuery library must be loaded before loading the common.js script.

# Dependency
- jQuery (mandatory)
- jQuery-ui (optional)
- select2 (optional)

# Features

## Initialize select2 with a place holder text.
```javascript
    <select class="select2" data-placeholder="Default Text">
        <option value="1">Option A</option>
        <option value="2">Option B</option>
        <option value="3">Option C</option>
    </select>
```

## Initialize the datepicker component of jQuery-ui.
```javascript
    <input type="text" class="datepicker" />
```

## Prevent double submission of forms
The submit button will be disabled after form submit.
So, if the user presses many times on the submit button, your back-end will receive only one request.

# Copyright and license
Code released under the MIT license.