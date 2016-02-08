"use strict";angular.module("jmlApiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/question",{templateUrl:"views/question.html",controller:"QuestionCtrl",controllerAs:"question"}).otherwise({redirectTo:"/"})}]),angular.module("jmlApiApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jmlApiApp").controller("AboutCtrl",["$scope","question",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.questions=[{quesBody:"Have you or your family members experienced domestic abuse on behalf of your spouse? Domestic abuse can range from physical abuse to emotional abuse. Domestic abuse also includes serious financial control, where you have no control over family finances and the filing of tax returns.",quesVisible:!0},{quesBody:"Did you and your spouse file joint tax returns?",quesVisible:!1},{quesBody:"Do you owe the IRS tax due to erroneous items attributable to your spouse? You would likely be aware of this from the collection notices that the IRS periodically sends showing the amount of tax due. The tax would be attributable to your spouse if they incurred the tax, such as from their employment income, gambling earnings, retirement withdrawals, and business income.",quesVisible:!1},{quesBody:"Has it been 2 years or less since the IRS first began collection activity on the tax?  In other words, did you start receiving notices from the IRS within the past two years?",quesVisible:!1},{quesBody:"Are you and your former spouse divorced, legally separated, or have you maintained separate households for at least one year? You and spouse would be considered members of the same household if you and your spouse live in the same dwelling, or you and your spouse live in different places but are not separated, or if your spouse is absent from the household but is likely to return (such as from prison, educational purposes, sick in the hospital, or is in the military).",quesVisible:!1},{quesBody:"Have you and your former spouse engaged in any fraudulent schemes so as to defraud the IRS or any other person? One example would be transferring assets so as to avoid tax in which you would benefit from. Assets include real estate, bonds, or other property that you now possess.",quesVisible:!1},{quesBody:"For the tax years in question, did you or your spouse incur any large expenses,such as vacations, home improvements, private schooling or did you and your spouse make any large purchases, such as automobiles, appliances, or jewelry?",quesVisible:!1},{quesBody:"Will you suffer financial hardship if you are required to pay the tax? For example,if you have to pay the tax, will you have trouble paying basic living expenses like food, shelter, and clothing?",quesVisible:!1}],a.faqs=[{question:"This is a question?",answer:"This is an answer.",faqVisible:!1,answerVisible:!1},{question:"This is another question?",answer:"This is another answer.",faqVisible:!1,answerVisible:!1}],a.answerYes=function(b){a.questions.shift(),console.log(a.questions[0].quesBody),a.questions[0].quesVisible=!0,console.log(a.questions.length)},a.answerNo=function(b){a.questions[b].quesVisible=!1,console.log(a.questions[b].quesBody),a.faqs[0].faqVisible=!a.faqs[0].faqVisible,a.faqs[1].faqVisible=!a.faqs[1].faqVisible,console.log(a.faqs[0].faqVisible)},a.toggleVisible=function(b){a.questions[b].quesVisible=!a.questions[b].quesVisible},a.faqToggleVisible=function(b){a.faqs[b].answerVisible=!a.faqs[b].answerVisible},window.$scope=a}]),angular.module("jmlApiApp").controller("QuestionCtrl",["$scope","question",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.questions=b.query()}]),angular.module("jmlApiApp").factory("question",["$resource",function(a){return a("/api/questions/:id.json",null,{update:{method:"PUT"}})}]),angular.module("jmlApiApp").run(["$templateCache",function(a){a.put("views/about.html",'<h2>Tax Relief Qualification</h2> <div class="well"> <div ng-repeat="question in questions track by $index"> <div ng-if="question.quesVisible">{{ question.quesBody }} <div> <br> </div> <div align="right"> <button class="btn btn-success" ng-click="answerYes($index)">Yes</button> <button class="btn btn-danger" ng-click="answerNo($index)">No</button> </div> </div> </div> <div ng-if="questions.length === 0"> <h4>You likely qualify for Innocent Spouse Relief.</h4> <p>See <a href="https://www.irs.gov/pub/irs-pdf/f8857.pdf" target="_blank">Form 8857</a>, Request for Innocent Spouse Relief. Find instructions for this form<a href="https://www.irs.gov/pub/irs-pdf/i8857.pdf" target="_blank"> here</a>.</p> <p>Check back in the near future for an Interactive Form 8857 which the John Marshall Domestic Violence Clinic is currently working on. This interactive format will aid users in filling out the form.</p> <p>Also, please visit the following organizations who are dedicated to helping those who are victims of domestic violence:</p> <ul> <li> <a href="http://www.betweenfriendschicago.org/aboutus.html" target="_blank">Between Friends</a> </li> <li> <a href="http://www.chicagocac.org/who-we-are/contact-us/" target="_blank">Chicago Children\'s Advocacy Center</a> </li> <li> <a href="http://www.familyrescueinc.org/" target="_blank">Family Resuce</a> </li> <li> 24-Hour Crisis Line: (800) 360-6619 </li> </ul> </div> <div ng-if="faqs[0].faqVisible"> <h2>Frequently Asked Questions</h2> <div><br></div> <div class="well" style="background-color:white" ng-repeat="faq in faqs track by $index" ng-click="faqToggleVisible($index)"> <p>{{ faq.question }}</p> <p class="well" ng-if="faq.answerVisible">{{ faq.answer }}</p> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/question.html",'<h1>Questions</h1> <div ng-repeat="question in questions"> {{ question.body }} {{ question.answer }} </div>')}]);