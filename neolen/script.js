const data = [
    { Email: 'reputationwarmup.com', 'First name': 'Marion', 'Last name': 'Descout' },
    { Email: 'vincent.vanhoot@outreachrs.com', 'First name': 'Vincent', 'Last name': 'Vanhoot' },
    { Email: 'rebecca@mailreachstellar.com', 'First name': 'Rebecca', 'Last name': 'Stevens' },
    { Email: 'siobhan@reachsecret.com', 'First name': 'Siobhan', 'Last name': 'Ban' },
    { Email: 'john.collins@deliverabilitylabs.com', 'First name': 'John', 'Last name': '' },
    { Email: 'julia.mcgregus@smartemailers.com', 'First name': 'Julia', 'Last name': 'MC Gregus' },
    { Email: 'samuel.moore@deliverabble.com', 'First name': 'Samuel', 'Last name': 'Moore' },
    { Email: 'thomas@inboxdoctors.com', 'First name': 'Thomas', 'Last name': 'Duplot' },
    { Email: 'maeva.bonnet@landininbox.com', 'First name': 'Maeva', 'Last name': 'Bonnet' },
    { Email: 'sholto@emailreach.co', 'First name': 'Sholto', 'Last name': 'Corty' },
    { Email: 'louis.thornton@reevercorp.com', 'First name': 'Louis', 'Last name': 'Thornton' },
    { Email: 'klaus@teamtreet.com', 'First name': 'Klaus', 'Last name': 'Holtzmann' },
    { Email: 'lucas@outboundancy.com', 'First name': 'Lucas', 'Last name': 'Maurer' },
    { Email: 'leah@akunaoutreach.com', 'First name': 'Leah', 'Last name': 'Ross' },
    { Email: 'scarlett.burton@reeverflow.com', 'First name': 'Scarlett', 'Last name': 'Burton' },
    { Email: 'josh@mailreech.com', 'First name': 'Josh', 'Last name': 'Coleman' },
    { Email: 'felipe.hernandez.p@leadsflowtrain.com', 'First name': 'Felipe', 'Last name': 'Hernandez Pinto' },
    { Email: 'elie.djemoun@dopetaste.com', 'First name': 'Elie', 'Last name': 'Djemoun' },
    { Email: 'rita.johnson2r@gmail.com', 'First name': '', 'Last name': '""' },
    { Email: 'pete.jenkins9422@gmail.com', 'First name': '', 'Last name': '""' },
    { Email: 'steven.lester.925@gmail.com', 'First name': '', 'Last name': '""' },
    { Email: 'rob.thomson238@gmail.com', 'First name': 'Robby', 'Last name': 'Thomson' },
    { Email: 'tom.maupard778@gmail.com', 'First name': '', 'Last name': '""' },
    { Email: 'debbie.bakos567@gmail.com', 'First name': '', 'Last name': '""' },
    { Email: 'marisa.fernandes5192@hotmail.com', 'First name': 'Marisa', 'Last name': 'Fernandes' },
    { Email: 'abhishek.baska6252@hotmail.com', 'First name': 'Abhishek', 'Last name': 'Baska' },
    { Email: 'nick.downey.997@hotmail.com', 'First name': 'Nick', 'Last name': 'Downey' },
    { Email: 'emma.pasano62@outlook.com', 'First name': 'Emma', 'Last name': 'Pasano' },
    { Email: 'laura.dufreisne75013@outlook.com', 'First name': 'Laura', 'Last name': 'Dufreisne' },
    { Email: 'eva.schokker43@outlook.com', 'First name': 'Eva', 'Last name': 'Schokker' },
    { Email: 'an.chamberlain44@yahoo.com', 'First name': 'An', 'Last name': 'Chamberlain' },
    { Email: 'oliver.yikes43@yahoo.com', 'First name': 'Oliver', 'Last name': 'Yikes' }
];

function createCSV(data) {
    let csvContent = "data:text/csv;charset=utf-8,";
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]));
    const headerRow = headers.join(",");
    const dataRows = rows.map(row => row.join(","));
    csvContent += headerRow + "\n" + dataRows.join("\n");
    return csvContent;
}

const exportBtn = document.querySelector('#export');
exportBtn.addEventListener('click', () => {
    const csvData = createCSV(data);
    const encodedUri = encodeURI(csvData);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "details.csv");
    document.body.appendChild(link);
    link.click();
});

const email = data.map(item => item.Email);
const emailformat = document.querySelector('#emailformat');
emailformat.addEventListener('change', (e) => {
    const separators = {
        semicolon: ';',
        colon: ':',
        pipe: '|',
        tab: '\t',
        comma: ','
    };
    const separator = separators[e.target.value] || ',';
    text2.textContent = email.join(`${separator} `);
});
const myText2 = document.querySelector('#myText2');
const text2 = document.createElement('p');
let text1 = document.querySelector('#text1').textContent;
let copyBtn1 = document.querySelector('#copyBtn1');
let copyBtn2 = document.querySelector('#copyBtn2');
text2.setAttribute('id', 'text2');
text2.setAttribute('class', ' m-0 p-0 flex-nowrap');
let seperator = ',';

text2.textContent = email.join(`${seperator} `);
myText2.appendChild(text2);

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = 'Copied to clipboard';
        notification.style = 'position: fixed; bottom:1rem ; right:1rem; padding: 10px; background: #559FE4; color: #194770; border-radius: 5px; z-index: 1000;';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 2000);
    } catch (error) {
        console.error('Failed to copy text:', error);
    }
}
copyBtn1.addEventListener('click', () => copyText(text1));
copyBtn2.addEventListener('click', () => copyText(text2.textContent));
