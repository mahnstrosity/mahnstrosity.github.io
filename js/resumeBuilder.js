
/**
 * JSON object for bio data
 */
var bio = {
    'name': 'Batman',
    'role': 'Dark Knight',
    'contacts': {
        'mobile': 'bat',
        'email': 'bwayne@wayneindustries.com',
        'signal': 'bat',
        'location': 'Gotham'
    },
    'welcomeMessage': 'Tell me. Do you bleed? ... You will!      <br>P.S. Supergirl, call me!',
    'skills': ['Theatricality', 'Deception', 'Martial Arts', 'Forensics', 'Growly Voice'],
    'biopic': 'images/darkKnightPoster.jpg',
    'display': function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);
        var formattedSignal = HTMLsignal.replace('%data%', bio.contacts.signal);
        $('#topContacts').append(formattedSignal);
        $('#footerContacts').append(formattedSignal);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedLocation);
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMsg);
        if (bio.skills.length) {
            $('#header').append(HTMLskillsStart);
            for (skill in bio.skills) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
                $('#skills').append(formattedSkill);
            }
        }
    }
};

/**
 * JSON object for education data
 */
var education = {
    'schools': [{
        'name': 'Old Dominion University',
        'location': 'Norfolk, VA',
        'degree': 'Bachelors',
        'majors': ['Computer Science'],
        'dates': 2008,
        'url': 'http://www.odu.edu'
    }, {
        'name': 'Christopher Newport University',
        'location': 'Newport News, VA',
        'degree': 'Bachelors',
        'majors': ['Legal Studies'],
        'dates': 1994,
        'url': 'http://www.cnu.edu'
    }],
    'onlineCourses': [{
        'title': 'Front-End Web Developer Nanodegree',
        'school': 'UDACITY',
        'date': 2016,
        'url': 'http://www.udacity.com'
    }],
    'display': function() {
        for (school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $('.education-entry:last').append(formattedNameDegree);
            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(formattedLocation);
            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(formattedDates);
            for (var i = 0; i < education.schools[school].majors.length; i++) {
                var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[i]);
                $('.education-entry:last').append(formattedMajor);
            }

        }
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
        }
        for (course in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $('.education-entry:last').append(formattedTitleSchool);
            var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
            $('.education-entry:last').append(formattedDates);
            var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
            $('.education-entry:last').append(formattedURL);
        }
    }
};

/**
 * JSON object for work data
 */
var work = {
    'jobs': [{
            'employer': 'The Justice League',
            'title': 'Caped Crusader',
            'location': 'Metropolis',
            'dates': '2014 - Present',
            'description': 'Jump between Superman and Kryptonite.'
        },

        {
            'employer': 'Wayne Industries',
            'title': 'Dark Knight',
            'location': 'Gotham',
            'dates': '2011 - 2014',
            'description': 'Constantly fight The Joker.'
        }
    ],
    'display': function() {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            $('.work-entry:last').append(formattedLocation);
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

/**
 * JSON object for projects data
 */
var projects = {
    'projects': [{
            'title': 'More Stuff To Throw',
            'dates': '2010 - Present',
            'description': 'More stuff to throw at bad guys.',
            'images': ['images/batarang.jpeg', 'images/smokePellets.jpeg']
        },

        {
            'title': 'The Sonic Batarang',
            'dates': '2007 - 2008',
            'description': 'The Sonic Batarang sent out a high-pitched wailing sound.',
            'images': ['images/sonicBatarang.jpg']
        }
    ],
    'display': function() {
        $('#projects').append(HTMLprojectStart);
        for (project in projects.projects) {
            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedDescription);
            for (var i = 0; i < projects.projects[project].images.length; i++) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[i]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

// Insert data into the html template
bio.display();
education.display();
work.display();
projects.display();

// Add a google map
$('#mapDiv').append(googleMap);
