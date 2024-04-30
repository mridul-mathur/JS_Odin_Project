
var data = {{ data | safe}};

const DeliverabilityScoreDiv = document.querySelector('#DeliverabilityScore');

function scrollto(targetDivId) {
    const targetDiv = document.querySelector('#' + targetDivId);
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}

let activeDetailsBtn = null;

const addToggleListener = (btn, div) => {
    if (btn) {
        btn.addEventListener('click', () => {
            toggleDetails(btn, div);
        });
    }
};

const toggleDetails = (detailsBtn, detailsDiv) => {
    if (activeDetailsBtn === detailsBtn) {
        detailsDiv.style.display = "none";
        activeDetailsBtn = null;
    } else {
        document.querySelectorAll(".detail-div").forEach((div) => {
            div.style.display = "none";
        });
        detailsDiv.style.display = "flex";
        activeDetailsBtn = detailsBtn;
    }
};

const toggleDetailButtons = [
    { btn: "#BlacklistsDetailsBtn", div: "#BlacklistsDetails" },
    { btn: "#ChecksDetailsBtn", div: "#ChecksDetails" },
    { btn: "#ConfigDetailsBtn", div: "#ConfigDetails" },
    { btn: "#spamWordsDetailsBtn", div: "#spamWordsDetails" },
    { btn: "#containLinksDetailsBtn", div: "#containLinksDetails" },
    { btn: "#emailCodeDetailsBtn", div: "#emailCodeDetails" }
];

toggleDetailButtons.forEach(({ btn, div }) => {
    addToggleListener(document.querySelector(btn), document.querySelector(div));
});

document.querySelectorAll(".detail-div").forEach((div) => {
    div.style.display = "none";
});
const deliverDetailBtn = document.querySelector('#deliverDetails');
const deliverOverviewBtn = document.querySelector('#deliverOverview');
const deliverReport = document.querySelector('#deliverReport');
const dataResult = data.results;
const container1 = document.createElement('div');
const container2 = document.createElement('div');

container1.innerHTML = `
    <div class="row col-12 justify-content-between align-items-center px-2">
        <div class="col-md-12 col-lg-8 justify-content-center align-items-center">
            <div class="table-responsive">
                <table class="table table-hover">
                    <colgroup>
                        <col style="width: 25%;">
                            <col style="width: 50%;">
                                <col style="width: 25%;">
                                </colgroup>
                                <tbody id="dataSection"></tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4 d-flex justify-content-center align-items-center">
                        <div id="chartSection" class="px-2">
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
            </div>`;

function createEmailDiv(name, desc, email, provider, statusText) {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('col-12', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center', 'border-bottom-light', 'p-2', 'px-4', 'm-0');
    emailDiv.innerHTML = `
            <div class="col-1 p-0 m-0 d-flex justify-content-start align-items-center">
                <h5>${name}</h5>
            </div>
            <div class="col-4 m-0 p-0 d-flex flex-column">
                <h5>${desc}</h5>
                <p>${email}</p>
            </div>
            <div class="col-2 p-0 m-0 d-flex justify-content-start align-items-center">
                <span class="border-prime rounded bg-prime text-white px-2 py-1">${provider}</span>
            </div>
            <div class="col-2 p-0 m-0 d-flex justify-content-start align-items-center">
                <span class="border-prime rounded btn-light px-2 py-1">${statusText}</span>
            </div>
            `;
    return emailDiv;
}

function detailsActive() {
    container2.innerHTML = '';
    container2.classList.add('col-12', 'p-0', 'd-flex', 'flex-column');
    dataResult.forEach((items) => {
        const emailDiv = createEmailDiv(items.first_name, items.desc, items.email, items.provider, items.status);
        container2.appendChild(emailDiv);
    });
}

deliverDetailBtn.addEventListener('click', () => {
    deliverDetailBtn.classList.add('text-decoration-underline', 'bg-light');
    deliverOverviewBtn.classList.remove('text-decoration-underline', 'bg-light');
    container1.style.display = 'none';
    container2.style.display = 'flex';
    detailsActive();
});

deliverOverviewBtn.addEventListener('click', () => {
    deliverOverviewBtn.classList.add('text-decoration-underline', 'bg-light');
    deliverDetailBtn.classList.remove('text-decoration-underline', 'bg-light');
    container2.innerHTML = '';
    container2.style.display = 'none';
    container1.style.display = 'flex';
});

deliverReport.appendChild(container1);
deliverReport.appendChild(container2);
container2.style.display = 'none';


const SuccessfulChecks = document.querySelector('#SuccessfulChecks');
const domain = data.domain;
const count = (domain.spf_valid ? 1 : 0) + (domain.dkim_valid ? 1 : 0) + (domain.dmarc_valid ? 1 : 0);
SuccessfulChecks.innerText = ` - ${count}/3 Successful`;

function populateDetails(dataArray, container, displayBtn) {
    if (dataArray.length === 0) {
        displayBtn.style.display = 'none';
    } else {
        container.innerHTML = dataArray.map((item, index) => `
          <span class="border-prime rounded p-1">
            <h5 class="m-0 p-0 fw-semibold">${index + 1}. ${item}</h5>
          </span>
        `).join('');
    }
}

const analysis = data.analysis_results;
const spamWordsDetails = document.querySelector('#spamWordsDetails');
const spamWordsBtn = document.querySelector('#spamWordsDetailsBtn');
const containLinksDetails = document.querySelector('#containLinksDetails');
const containLinksDetailsBtn = document.querySelector('#containLinksDetailsBtn');
const emailAttachmentsDetailsBtn = document.querySelector('#emailAttachmentsDetailsBtn');

populateDetails(analysis.spamwords, spamWordsDetails, spamWordsBtn);
populateDetails(analysis.links_results.details, containLinksDetails, containLinksDetailsBtn);
populateDetails(analysis.attachments, containLinksDetails, emailAttachmentsDetailsBtn);