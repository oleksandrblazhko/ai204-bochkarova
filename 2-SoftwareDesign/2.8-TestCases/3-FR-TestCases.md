|FR id|TC id|Опис кроків тестового сценарію|Опис очікуваних результатів|
|:-|:-|:-|:-|
|FR1.1|TC1.1|Початкові умови: дані ще не додано <br> Кроки сценарію <br> date = 27/10/2022 <br> duration = 3 <br> coffeine = true|Результат = 1|
|FR1.1|TC1.2|Початкові умови: відсутні <br> Кроки сценарію <br> date = 01/10/2042 <br> duration = 3 <br> coffeine = true|Результат = -1|
|FR1.1|TC1.3|Початкові умови: відсутні <br> Кроки сценарію <br> date = 27 жовтня <br> duration = 3 <br> coffeine = true|Результат = -1|
|FR1.1|TC1.4|Початкові умови: відсутні <br> Кроки сценарію <br> date = 27/10/2022 <br> duration = 300 <br> coffeine = true|Результат = -2|
|FR1.1|TC1.5|Початкові умови: відсутні <br> Кроки сценарію <br> date = 27/10/2022 <br> duration = 3 <br> coffeine = так, був|Результат = -3|
