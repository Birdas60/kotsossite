
const app = {
  home1: document.getElementById("home1"),
  goals: document.getElementById("goals"),
  aboutButton: document.getElementById("aboutButton"),
  home: document.getElementById("home")
};
// Add event listeners to buttons

app.goals.addEventListener('click', function() {
  app.goals.classList.add('clicked');
  app.home1.classList.remove('clicked');
  app.aboutButton.classList.remove('clicked');
});

app.home1.addEventListener('click', function() {
  app.home1.classList.add('clicked');
  app.goals.classList.remove('clicked');
  app.aboutButton.classList.remove('clicked');
});

app.aboutButton.addEventListener('click', function() {
  app.aboutButton.classList.add('clicked');
  app.goals.classList.remove('clicked');
  app.home1.classList.remove('clicked');
});

// Define functions for each feature
function goals() {
  app.home.innerHTML = `
    <section id="home">
      <div class="ul2">
        <h1 class="stoxoi">Στόχοι</h1>
        <ol>
            <li><strong>Δημιουργία ιστοσελίδας για παράπονα</strong>: Ο πρώτος μου στόχος είναι η δημιουργία μιας ιστοσελίδας, όπου θα μπορείτε να μου στέλνετε τα παράπονά σας, τις ανησυχίες σας ή οποιαδήποτε πρόταση έχετε. Θέλω να έχετε έναν εύκολο τρόπο να επικοινωνείτε μαζί μου, ακόμη και εκτός σχολείου, ώστε να μπορώ να ακούω τις ανάγκες σας και να βρίσκουμε λύσεις.
</li>
            <li> <strong>Επίλυση προβλημάτων της τάξης</strong>: Δεσμεύομαι να είμαι δίπλα σας για να λύνουμε μαζί κάθε πρόβλημα που μπορεί να προκύψει μέσα στην τάξη. Από ζητήματα πειθαρχίας έως και προβλήματα στις σχέσεις μεταξύ των μαθητών, θα προσπαθήσω να τα διαχειριστούμε με τρόπο που να εξασφαλίζει τη δικαιοσύνη και την αρμονία για όλους.</li>
            <li><strong>Συνέλευση οποτεδήποτε ζητηθεί</strong>: Τέλος, όποτε νιώθετε ότι υπάρχει κάτι σημαντικό που πρέπει να συζητηθεί σε επίπεδο ομάδας, θα οργανώνουμε μια συνέλευση για να εκφράζετε ελεύθερα τις απόψεις σας. Η επικοινωνία είναι το κλειδί για να προχωράμε μπροστά ως ομάδα, και θα ήθελα να γνωρίζετε ότι η πόρτα μου είναι πάντα ανοιχτή για συζητήσεις.</li>
        </ol>
        <p>Αυτοί οι στόχοι έχουν σχεδιαστεί για να δημιουργήσουμε ένα περιβάλλον ανοιχτής επικοινωνίας και συνεργασίας. Ανυπομονώ να κάνουμε μαζί τα πρώτα βήματα προς αυτή την κατεύθυνση.
<p>
        <p>Με εκτίμηση, Κωνσταντίνος Ντρόλιας </p>
      </div>
    </section>
  `;
}
document.getElementById('secondHome').addEventListener('click', home())
document.getElementById('secondHome').addEventListener('click', function() {
  app.home1.classList.add('clicked');
  app.goals.classList.remove('clicked');
  app.aboutButton.classList.remove('clicked');
});
function home() {
  app.home.innerHTML = `
    <div class="ul1">
      <div class="ul2">
        <p>Why you should vote for me:</p>
        <ul>
          <li>Improve student life and well-being</li>
          <li>Enhance school spirit and community engagement</li>
          <li>Support academic excellence and resources</li>
        </ul>
      </div>
  `;
}

app.aboutButton.addEventListener('click', about);

function about() {
  app.home.innerHTML = `
    <div class="ol1">
      <h1>About me</h1>
      <ol>
        <li><strong>Οραματική ηγεσία:</strong> Έχω ένα σαφές και προνοητικό όραμα για να κάνω το σχολικό έτος 2024-2025 εξαιρετικό για όλους, με σχέδια που εστιάζουν στην ακαδημαϊκή επιτυχία, τις διασκεδαστικές δραστηριότητες και την οικοδόμηση της κοινότητας.</li>
        <li><strong>Ισχυρός συνήγορος:</strong> Δεσμεύομαι να είμαι η φωνή των συμμαθητών, φροντίζοντας να ακούγονται και να αντιμετωπίζονται οι ιδέες και οι ανησυχίες τους. Πιστεύω στην δίκαιη εκπροσώπηση των συμφερόντων όλων.</li>
        <li><strong>Περιεκτικός και προσιτός:</strong> Θα δημιουργήσω μια φιλόξενη ατμόσφαιρα όπου κάθε μαθητής νιώθει ότι εκτιμάται και περιλαμβάνεται. Είμαι προσιτός και πάντα ανοιχτός σε νέες ιδέες, διασφαλίζοντας ότι όλες οι φωνές είναι μέρος της συζήτησης.</li>
        <li><strong>Αποδεδειγμένη αφοσίωση:</strong> Είμαι αφοσιωμένος στη βελτίωση του σχολικού περιβάλλοντος και στη θετική επίδραση στους συμμαθητές μου.</li>
        <li><strong>Με γνώμονα τη δράση:</strong> Δεν μιλάω απλώς για την αλλαγή την κάνω πράξη. Με την προληπτική μου προσέγγιση, θα μετατρέψω τις ιδέες σε πραγματικότητα, διασφαλίζοντας ότι η τάξη μας θα έχει την καλύτερη δυνατή εμπειρία κατά τη διάρκεια του σχολικού έτους 2024-2025.</li>
      </ol>
    </div>
  `;
}


