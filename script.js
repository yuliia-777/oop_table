const data = [
    {
        'name' : 'Strings',
        'description' : 'Strings are declared by wrapping the variable’s value in single or double quotes.',
        'example' : '{% assign my_string = "Hello World!" %}'
    },
    {
        'name' : 'Numbers',
        'description' : 'Numbers include floats and integers.',
        'example' : '{% assign my_num = 25 %}'
    },
    {
        'name' : 'Booleans',
        'description' : 'Booleans are either true or false. No quotations are necessary when declaring a boolean.',
        'example' : '{% assign foo = true %}<br>{% assign bar = false %}'
    },
    {
        'name' : 'Nil',
        'description' : 'Nil is an empty value that is returned when Liquid code has no results. It is not a string with the characters ‘nil’. Nil is treated as false in the conditions of {% if %} blocks and other Liquid tags that check for the truthfulness of a statement.',
        'example' : ''
    },
    {
        'name' : 'Arrays',
        'description' : 'Arrays hold a list of variables of all types. To access items in an array, you can loop through each item in the array using a for tag or a tablerow tag.',
        'example' : '{% for tag in product.tags %}<br>  {{ tag }}<br>{% endfor %}'
    }
]

const types = {
    'name' : {
        'label' : 'Type name'
    },
    'description' : {
        'label' : 'Type description'
    },
    'example' : {
        'label' : 'Some examples',
        'src' : 'html'
    }
}

const table = new Table();

table.header = 'Liquid Objects Types';
table.headerClass = ['header', 'header--compact'];
table.element = '.container';
table.tableClass = ['table', 'table--large'];

table.attribute = types;
table.data = data;

table.render();