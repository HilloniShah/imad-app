var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
        `article-one`:{
            title:'Article-one | Hilloni',
            heading:'article-one',
            date:'August 21, 2017',
            content: ` <p>
                            This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course.
                        </p>
                        <p>
                            This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course.
                        </p>`
            
        },
        
        `article-two`:{
            title:'Article-Two | Hilloni',
            heading:'article-two',
            date:'August 22, 2017',
            content: ` <p>
                            This is the content of my second artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. 
                        </p>`
            
        },
        
        `article-three`:{
            title:'Article-three | Hilloni',
            heading:'article-three',
            date:'August 23, 2017',
            content: ` <p>
                            This is the content of my third artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course. This is the content of my first artice. I am doing a course on Introduction to Mobile Application Development. I enjoy learning this course.
                        </p>`
            
        }
};

function createTemplate(data){
    
        var heading=data.heading;
        var title=data.title;
        var date=data.date;
        var conten=data.content;
        
        var htmlTemplate=`<html>
            <head>
                <title>
                    ${heading}
                </title>
                <link href="/ui/style.css" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            
            <body>
                
                <div class="container">
                    <div>
                        <a href="/">Back to Home Page</a>
                    </div>
                    <hr/>
                    <h2>${title} </h2>
                    <div>
                        ${date} 
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
            </body>
        </html>`;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ :articleName',function(req,res){
    articleName=req.params.articleName;
    res.sendFile(createTemplate(articles[articleName]));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
