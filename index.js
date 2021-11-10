const Box_content = document.createElement('div')
const Box_Features = document.createElement('div')
const Box_containerdiv = document.querySelector('.Container-Card')
const Box_contentdiv = document.createElement('div')
const Box_Header = document.createElement('div')
const Sample = document.createElement('div')
Sample.innerHTML = '<h3> Get insights that help your business grow.</h3>';

const image = document.createElement('img')
const Containerimg = document.createElement('div')
Containerimg.style.width = '50%'
image.src = 'images/image-header-desktop.jpg'
image.classList.add('imagepic')
image.classList.add('image')
Containerimg.append(image)

function Emphasize(TextInput) {
  TextInput.style.fontWeight = '800'
  TextInput.style.fontSize = '24px'
  TextInput.style.color = 'white'
}

function features(){
  const Featurelist = ["10k+ companies", "314 templates", "12m+ queries"];
  const Features = document.createElement('div')
  Featurelist.forEach(element => {
    const EmphasizeDiv = document.createElement('div')
    const SubtextDiv = document.createElement('div')
    const FeatureGroup = document.createElement('div')
    var stringArray = element.split(/(\s+)/)
    var Emphasized = stringArray[0]
    var Subtext = stringArray[2]
    Emphasize(EmphasizeDiv)

    SubtextDiv.style.color = '#9794b1'
    SubtextDiv.append(Subtext)
    
    EmphasizeDiv.append(Emphasized)
    console.log(Subtext)
    Features.style.display = 'flex'
    Features.style.whiteSpace = 'nowrap'
    Features.style.justifyContent = 'space-between'
    FeatureGroup.append(EmphasizeDiv, SubtextDiv )
    Features.append(FeatureGroup)
    Box_Features.append(Features)
    
    
  });
}
features()
Box_containerdiv.style.backgroundColor = '#a960d4;';

Box_Header.innerHTML = '<h3> Get insights that help your business grow.</h3>';
Emphasize(Box_Header)
Box_Header.style.textAlign = 'left'
Box_content.innerHTML = '<p> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>'
Box_content.style.color = '#9794b1';
Box_content.style.font = '24px';
Box_content.style.padding = '10px 0px';
Box_contentdiv.style.backgroundColor = '#1c1938';
Box_contentdiv.style.width = '50%'
Box_contentdiv.style.padding = '0px 40px 0px 20px'
Box_contentdiv.style.borderRadius = '3px 0px 0px 3px'
Box_containerdiv.classList.add('Borderbox')
Box_contentdiv.append(Box_Header, Box_content, Box_Features)
Box_containerdiv.style.margin = '40px 20px 40px 20px'
Box_containerdiv.classList.add('.grid-container-element')
Box_containerdiv.append(Box_contentdiv, Containerimg)

//Containerimg
/*

Box_containerdiv.style.color = 'white';
Box_containerdiv.style.backgroundColor = '#1f1c3a';
Box_containerdiv.style.border =  "solid #CBD5E1"
Box_containerdiv.style.borderRadius = "3px"
Box_containerdiv.style.padding = "24px 12px"
Box_content.style.color = '#9794b1';
Box_content.style.font = '24px';
Box_content.style.fontWeight = '400';

function addTable() {
  const Features = ["10k+ companies", "314 templates", "12m+ queries"];

  var table = document.createElement('TABLE');
  table.border = '1';
  
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (var i = 0; i < 2; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    
    Features.forEach(element => {
      var td = document.createElement('TD');
      td.width = '140';
      
      td.appendChild(document.createTextNode(Emphasize(element)));
      td.style.color = 'white';
      td.style.fontSize = '24px';
      td.style.fontWeight = '400';
      

      tr.appendChild(td);
    });
   
  }
  Box_Features.appendChild(table);
}
addTable()
function Emphasize(TextInput) {
  
  var stringArray = TextInput.split(/(\s+)/)
  var Emphasized = stringArray[0]
  return Emphasized
  
}
function Subtext(TextInput) {
  
  var stringArray = TextInput.split(/(\s+)/)
  var Emphasized = stringArray[2]
  return Emphasized
  
}
*/

