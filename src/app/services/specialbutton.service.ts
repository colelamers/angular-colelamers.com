import { Injectable } from '@angular/core';
import { Quotes } from '../objects/quoteInfo';

@Injectable({
    providedIn: 'root',
})
export class SpecialButtonService {
    quotes: Quotes = {
        quotesList:
            [
                {
                    quote: "If the rule you followed, brought you to this, of what use was the rule?",
                    author: "Javier Bardem in No Country For Old Men"
                },
                {
                    quote: "Three may keep a secret if two of them are dead.",
                    author: "Ben Franklin"
                },
                {
                    quote: "Beginning is easy; Continuing is hard.",
                    author: ""
                },
                {
                    quote: "Better to remain silent and be thought a fool than to speak and to remove all doubt.",
                    author: "Mark Twain"
                },
                {
                    quote: "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.",
                    author: "Various"
                },
                {
                    quote: "The past is passed, the future is now.",
                    author: "Christopher Walken in Joe Dirt"
                },
                {
                    quote: "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.",
                    author: "Bjarne Stroustrup"
                },
                {
                    quote: "Careful, Icarus, that you don't fly too close to the sun.",
                    author: ""
                },
                {
                    quote: "It behooves oneself to keep his wits.",
                    author: "Brad Pitt in Inglorious Basterds"
                },
                {
                    quote: "The more you know who you are, and what you want, the less you let things upset you.",
                    author: "Bill Murray in Lost in Translation"
                },
                {
                    quote: "It's a double pleasure to deceive the deceiver.",
                    author: "Niccolo Machiavelli"
                },
                {
                    quote: "One who deceives will always find those who allow themselves to be deceived.",
                    author: "Niccolo Machiavelli"
                },
                {
                    quote: "A gentleman is simply a patient wolf.",
                    author: "Lana Turner"
                },
                {
                    quote: "I'm sorry darling. This is the game.",
                    author: "James McAvoy in Atomic Blonde"
                },
                {
                    quote: "Never attribute to malice that which is adequately explained by incompetence.",
                    author: ""
                },
                {
                    quote: "The only thing worse than not getting what you want, is getting it.",
                    author: "Sonya Sones"
                },
                {
                    quote: "He who has done nothing worthy of criticism is of no consequence.",
                    author: ""
                },
                {
                    quote: "First time home buyers always forget to factor in the cost of owning a home.",
                    author: ""
                },
                {
                    quote: "Life has no purpose. Everything will be forgotten. Nothing you do matters.",
                    author: ""
                },
                {
                    quote: "Happy wife, happy life; But a single man's got a plan.",
                    author: ""
                },
                {
                    quote: "There are no libertarians in an economic crisis.",
                    author: ""
                },
                {
                    quote: "Markets can remain irrational longer than you can remain solvent.",
                    author: "John Maynard Keynes"
                },
                {
                    quote: "Pessimists remind Optimists that they don't live in reality. Optimists remind Pessimists that they live in two different realities.",
                    author: ""
                },
                {
                    quote: "Separate the wheat from the chaff.",
                    author: "Inspired from a Biblical verse"
                },
                {
                    quote: "The man who runs away, fights again.",
                    author: "Menander"
                },
                {
                    quote: "The wise man speaks because he has something to say, the fool because he has to say something.",
                    author: "Aristotle"
                },
                {
                    quote: "Those who can, do; Those who can't, teach; Those who cannot teach, administrate.",
                    author: "H.L. Mencken"
                },
                {
                    quote: "The road to wisdom is paved with pain.",
                    author: ""
                },
                {
                    quote: "The path to hell is paved with good intentions.",
                    author: ""
                },
                {
                    quote: "No good deed goes unpunished.",
                    author: ""
                },
                {
                    quote: "God created war so that Americans would learn geography.",
                    author: "Mark Twain"
                },
                {
                    quote: "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.",
                    author: "Mark Twain"
                },
                {
                    quote: "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.",
                    author: "Mark Twain"
                },
                {
                    quote: "Heaven goes by favor. If it went by merit, you would stay out and your dog would go in.",
                    author: "Mark Twain"
                },
                {
                    quote: "It's easier to fool people than to convince them that they have been fooled.",
                    author: "Mark Twain"
                },
                {
                    quote: "I have never met a man so ignorant that I couldn't learn something from him.",
                    author: "Galileo Galilei"
                },
                {
                    quote: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.",
                    author: "Galileo Galilei"
                },
                {
                    quote: "By denying scientific principles, one may maintain any paradox.",
                    author: "Galileo Galilei"
                },
                {
                    quote: "And, believe me, if I were again beginning my studies, I should follow the advice of Plato and start with mathematics.",
                    author: "Galileo Galilei"
                },
                {
                    quote: "Let us be thankful for the fools. If it were not for them, the rest of us could not succeed. ",
                    author: "Mark Twain"
                },
                {
                    quote: "Good judgement is the result of experience and experience the result of bad judgement.",
                    author: "Mark Twain"
                },
                {
                    quote: "There is nothing so annoying as having two people talking when you're busy interrupting.",
                    author: "Mark Twain"
                },
                {
                    quote: "For business reasons, I must preserve the outward signs of sanity.",
                    author: "Mark Twain"
                },
                {
                    quote: "She was not quite what you would call refined. She was not quite what you would call unrefined. She was the kind of person that keeps a parrot.",
                    author: "Mark Twain"
                },
                {
                    quote: "I think we agree, the past is over.",
                    author: "George Bush"
                },
                {
                    quote: "I know the human being and fish can coexist peacefully.",
                    author: "George Bush"
                },
                {
                    quote: "I call upon all nations, to do everything they can, to stop these terrorist killers. Thank you...now watch this drive.",
                    author: "George Bush"
                },
                {
                    quote: "One of the great things about books is sometimes there are some fantastic pictures.",
                    author: "George Bush"
                },
                {
                    quote: "America is the land of petty dictators.",
                    author: ""
                },
                {
                    quote: "The race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.",
                    author: "Ecclesiastes 9-11, Bible"
                },
                {
                    quote: "Many people would rather cling to the idea of their perfect reality than work within the confines of their current one.",
                    author: ""
                },
                {
                    quote: "Marriage, like any option, has a strike price.",
                    author: ""
                },
                {
                    quote: "It is wise to differentiate between your personal reality and the one you live in.",
                    author: ""
                },
                {
                    quote: "There are worse fates than death.",
                    author: ""
                },
                {
                    quote: "Age does not equate wisdom.",
                    author: "My quote; Menander - It is not white hair that engenders wisdom."
                },
                {
                    quote: "As a matter of self-preservation, a man needs good friends or ardent enemies, for the former instruct him and the latter take him to task.",
                    author: "Diogenes"
                },
                {
                    quote: "The die is cast.",
                    author: "Julius Caesar"
                },
                {
                    quote: "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.",
                    author: "Patrick Stewart as Jean-Luc Picard in Star Trek the Next Generation"
                },
                {
                    quote: "It is difficult to free fools from the chains they revere.",
                    author: "Voltaire"
                },
                {
                    quote: "If you want me to believe in God, you must make me touch him.",
                    author: "Denis Diderot"
                },
                {
                    quote: "It is dangerous to be right in matters on which the established authorities are wrong.",
                    author: "Voltaire"
                },
                {
                    quote: "Each player must accept the cards life deals him. Once in hand, he alone must decide how to play them.",
                    author: "Voltaire"
                },
                {
                    quote: "The most cost-effective martial art is a new pair of running shoes.",
                    author: ""
                },
                {
                    quote: "Praise the God of all, drink the wine, and let the world be the world.",
                    author: "French proverb, popularized by the Tudors show"
                },
                {
                    quote: "There's no innovation without disobedience.",
                    author: "French proverb"
                },
                {
                    quote: "Some people die at 25 and aren't buried until 75.",
                    author: "Benjamin Franklin"
                },
                {
                    quote: "Religion is what keeps the poor from murdering the rich.",
                    author: "Napoleon Bonaparte"
                },
                {
                    quote: "The surest way to remain poor is to be an honest man.",
                    author: "Napoleon Bonaparte"
                },
                {
                    quote: "Time heals all wounds.",
                    author: ""
                },
                {
                    quote: "Lead, follow, or get out of the way.",
                    author: "Thomas Paine"
                },
                {
                    quote: "Take calculated risks. That is quite different from being rash.",
                    author: "George S. Patton"
                },
                {
                    quote: "A man can be happy with any woman, as long as he does not love her.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "To love oneself is the beginning of a lifelong romance.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "Either write something worth reading or do something worth writing.",
                    author: "Benjamin Franklin"
                },
                {
                    quote: "Luck is when preparation meets opportunity.",
                    author: ""
                },
                {
                    quote: "Blessed is he that expects nothing, for he shall never be disappointed.",
                    author: "Benjamin Franklin"
                },
                {
                    quote: "If a man empties his purse into his head, no one can take it from him.",
                    author: "Benjamin Franklin"
                },
                {
                    quote: "Skepticism is the first step on the road to philosophy.",
                    author: "Dennis Diderot"
                },
                {
                    quote: "But truly, if I were not Alexander, I wish I were Diogenes.",
                    author: "Alexander the Great after Diogenes told him to 'stand out of my light'"
                },
                {
                    quote: "Arrogant men are successful because of hard work; Wise men are successful because of sheer luck.",
                    author: ""
                },
                {
                    quote: "Is God willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God?",
                    author: "Epicurus"
                },
                {
                    quote: "If I had seven peasants, I could make seven lords. But if I had seven lords, I could not make one Holbein!",
                    author: "Henry VIII"
                },
                {
                    quote: "Make it Work, Make it Right, Make it Fast.",
                    author: "Kent Beck"
                },
                {
                    quote: "The reason most people fail instead of succeed is they trade what they want most for what they want at the moment.",
                    author: "Napoleon Bonaparte"
                },
                {
                    quote: "Nobody ever got fired for choosing IBM.",
                    author: "cya adage"
                },
                {
                    quote: "In a Recession, there is no future beyond the current quarter.",
                    author: ""
                },
                {
                    quote: "Salute the rank, not the man.",
                    author: ""
                },
                {
                    quote: "A human being should be able to plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.",
                    author: "Robert Heinlein"
                },
                {
                    quote: "Almost any sect, cult, or religion will legislate its creed into law if it acquires the political power to do so.",
                    author: "Robert Heinlein"
                },
                {
                    quote: "If you come for the king, you better not miss.",
                    author: ""
                },
                {
                    quote: "Sucks to suck.",
                    author: ""
                },
                {
                    quote: "I know a man who gave up smoking, drinking, sex, and rich food. He was healthy right up to the time he killed himself.",
                    author: "Johnny Carson"
                },
                {
                    quote: "In time, you will know the tragic extent of my failings.",
                    author: ""
                },
                {
                    quote: "One day closer to death!",
                    author: "Rufus Sewell in Marvelous Mrs. Maisel"
                },
                {
                    quote: "You can't min-max life.",
                    author: ""
                },
                {
                    quote: "Every dead body on Mt. Everest was once a highly motivated individual.",
                    author: "Multiple attributions"
                },
                {
                    quote: "Count the pennies and the pounds count themselves.",
                    author: "Various"
                },
                {
                    quote: "Never underestimate the obstinacy of an individual unwilling to change.",
                    author: ""
                },
                {
                    quote: "It is no nation we inhabit, but a language. Make no mistake; our native tongue is our true fatherland.",
                    author: "Emil Cioran"
                },
                {
                    quote: "To have another language is to possess a second soul.",
                    author: "Charlemagne"
                },
                {
                    quote: "Music is the universal language of mankind.",
                    author: "Henry Wadsworth Longfellow"
                },
                {
                    quote: "There is no such thing as a new beginning. With every day we live, we pick up new baggage, baggage that we must carry with us for the rest of our lives. There's no dropping it and pretending we are fresh and clean just because we got off a boat.",
                    author: "Niko Bellic from GTA4"
                },
                {
                    quote: "The difference between an intelligent man and a wise man is that the wise man knows when being wrong is right.",
                    author: ""
                },
                {
                    quote: "The only hope you have is to accept the fact that you're already dead. The sooner you accept that, the sooner you'll be able to function as a soldier is supposed to function: without mercy, without compassion, without remorse. All war depends upon it.",
                    author: "Matthew Settle from Band of Brothers as Ronald Speirs"
                },
                {
                    quote: "A man of genius is seldom ruined but by himself.",
                    author: "Samuel Johnson"
                },
                {
                    quote: "You know, throughout history, I bet every old man probably said the same thing. And old men die, and the world keeps spinnin'.",
                    author: "Woody Harrelson from True Detectives"
                },
                {
                    quote: "What progress we are making. In the Middle Ages they would have burned me. Now they are content with burning my books.",
                    author: "Sigmund Freud"
                },
                {
                    quote: "What is hell? I maintain that it is the suffering of being unable to love.",
                    author: "Fyodor Dostoevsky, The Brothers Karamazov"
                },
                {
                    quote: "But how could you live and have no story to tell?",
                    author: "Fyodor Dostoevsky, White Nights"
                },
                {
                    quote: "The best cure for Christianity is reading the bible.",
                    author: "Mark Twain"
                },
                {
                    quote: "If someone is selling you something, they're lying somewhere.",
                    author: ""
                },
                {
                    quote: "There's always a catch. Nothing in life is free.",
                    author: ""
                },
                {
                    quote: "When life gives you lemons? Don't make lemonade. Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these? Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's going to burn your house down! With the lemons!",
                    author: "J.K. Simmons as Cave Johnson in Portal 2"
                },
                {
                    quote: "Science isn't about why. It's about why not!",
                    author: "J.K. Simmons as Cave Johnson in Portal 2"
                },
                {
                    quote: "The only way to settle down, is by settling.",
                    author: ""
                },
                {
                    quote: "When should a man marry? A young man not yet, an elder man not at all.",
                    author: "Sir Francis Bacon"
                },
                {
                    quote: "A fool and his money are soon to part.",
                    author: ""
                },
                {
                    quote: "Life without an object to pursue is a languid and tiresome thing.",
                    author: "Sir Francis Bacon"
                },
                {
                    quote: "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
                    author: "Albert Einstein"
                },
                {
                    quote: "Men have less scruple in offending one who is beloved than one who is feared, for love is preserved by the link of obligation which, owing to the baseness of men, is broken at every opportunity for their advantage; but fear preserves you by a dread of punishment which never fails.",
                    author: "Niccolo Machiavelli"
                },
                {
                    quote: "It is better not to become acquainted with men about whom you have formerly had doubts. No matter what you do, they will be people by whom you will be tripped up or taken in.",
                    author: "Yamamoto Tsunetomo"
                },
                {
                    quote: "To give a person an opinion one must first judge well whether that person is of the disposition to receive it or not.",
                    author: "Yamamoto Tsunetomo"
                },
                {
                    quote: "When someone is giving you his opinion, you should receive it with deep gratitude even though it is worthless. If you don't, he will not tell you the things that he has seen and heard about you again.",
                    author: "Yamamoto Tsunetomo"
                },
                {
                    quote: "Who am I to deny an audience with the King?",
                    author: ""
                },
                {
                    quote: "We all work for someone.",
                    author: "John Ham in Mad Men"
                },
                {
                    quote: "Having sacrificed my youth to my father and my maturity to the State, I believe I have the right to dispose of my old age.",
                    author: "Frederick the Great"
                },
                {
                    quote: "There is no such thing as the wrong side of history.",
                    author: ""
                },
                {
                    quote: "The more comfort, the less courage there is.",
                    author: "Prince Aleksandr V. Suvorov"
                },
                {
                    quote: "Either way, you'll regret it.",
                    author: "Simplified version of a Søren Kierkegaard quote"
                },
                {
                    quote: "If you need a friend, get a dog.",
                    author: "Michael Douglas as Gordon Gecko in Wall Street"
                },
                {
                    quote: "If you always live for the now, one day your future self won't be able to.",
                    author: ""
                },
                {
                    quote: "I owe everything to the wisdom of an old man and to the simplicity of a young girl.",
                    author: "Søren Kierkegaard"
                },
                {
                    quote: "People settle for a level of despair they can tolerate and call it happiness.",
                    author: "Søren Kierkegaard"
                },
                {
                    quote: "Distance makes the heart grow fonder; Familiarity breeds contempt.",
                    author: ""
                },
                {
                    quote: "The rational man in an irrational world sooner or later is declared the irrational one for being too rational.",
                    author: ""
                },
                {
                    quote: "Der Gedanke an den Selbstmord ist ein starkes Trostmittel: mit ihm kommt man gut über manche böse Nacht hinweg.",
                    author: "Friedrich Nietzsche"
                },
                {
                    quote: "There's a reason the road less traveled is so.",
                    author: ""
                },
                {
                    quote: "My only regret is I could not have been wiser sooner.",
                    author: ""
                },
                {
                    quote: "The man who prays is the one who thinks that god has arranged matters all wrong, but who also thinks that he can instruct god how to put them right.",
                    author: "Christopher Hitchens"
                },
                {
                    quote: "Sage mir, mit wem Du umgehst, und ich sage Dir, was Du bist.",
                    author: "Johann Wolfgang von Goethe"
                },
                {
                    quote: "Seldom do the supernatural and mathematics correlate.",
                    author: ""
                },
                {
                    quote: "Better the devil you know than the devil you don't.",
                    author: ""
                },
                {
                    quote: "I do not ask for much, I just hope that you demand little.",
                    author: ""
                },
                {
                    quote: "Giving every man a vote has no more made men wise and free than Christianity has made them good.",
                    author: "H.L. Mencken"
                },
                {
                    quote: "Any man who afflicts the human race with ideas must be prepared to see them misunderstood.",
                    author: "H.L. Mencken"
                },
                {
                    quote: "There's a window for every opportunity in life that will eventually be shut forever.",
                    author: ""
                },
                {
                    quote: "When one person suffers from a delusion, it is called insanity. When many people suffer from a delusion it is called a religion.",
                    author: "Robert M. Pirsig"
                },
                {
                    quote: "A cult is a religion with no political power.",
                    author: "Tom Wolfe"
                },
                {
                    quote: "Nothing exists but you. And you are but a thought.",
                    author: "Mark Twain"
                },
                {
                    quote: "Whether God exists or does not exist, He has come to rank among the most sublime and useless truths.",
                    author: "Dennis Diderot"
                },
                {
                    quote: "You will never be anything but a philosopher. And what is that but an ass who plagues himself all his life, that he may be talked about after he is dead.",
                    author: "Madame Rousseau to Jean le Rond d'Alembert"
                },
                {
                    quote: "What good are rights if one cannot naturally invoke them and another can forcefully revoke them? Rights, therefore, are as much a cultural precedent reinforced only by the laws that are enforced.",
                    author: ""
                },
                {
                    quote: "Follow the money.",
                    author: "All the President's Men"
                },
                {
                    quote: "The only opinions that matter are the ones that can be enforced.",
                    author: ""
                },
                {
                    quote: "Life success is nothing more than a lottery. You can increase your odds in many ways. But in the end, you must be chosen.",
                    author: ""
                },
                {
                    quote: "I have yet to meet a salesperson with an IQ above their commission rate.",
                    author: ""
                },
                {
                    quote: "It's not a problem, until it is.",
                    author: ""
                },
                {
                    quote: "Hunger is the best spice.",
                    author: ""
                },
                {
                    quote: "There's never a good time to enter the market.",
                    author: ""
                },
                {
                    quote: "The ability to speak does not make you intelligent.",
                    author: "Liam Neeson in Star Wars"
                },
                {
                    quote: "Men always want to be a woman's first love; Women like to be a man's last romance.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "Ridicule is the tribute paid to the genius by the mediocrities.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "A woman begins by resisting a man's advances and ends by blocking his retreat.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "When a man has once loved a woman he will do anything for her except continue to love her.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "Experience is merely the name men gave to their mistakes.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "The easiest way to earn $10,000 making music is to spend $1,000,000.",
                    author: ""
                },
                {
                    quote: "Humanity has believed in myriads of nonsensicle ideals yet still achieved many great feats.",
                    author: ""
                },
                {
                    quote: "Opportunities multiply as they are seized.",
                    author: "Sun Tzu"
                },
                {
                    quote: "Do not seek to follow in the footsteps of the wise. Seek what they sought.",
                    author: "Matsuo Basho"
                },
                {
                    quote: "It will seem difficult at first, but everything is difficult at first.",
                    author: "Miyamoto Musashi"
                },
                {
                    quote: "Even if one has learned all the sayings of the sages and saints, he should not insist on them obstinately.",
                    author: "Asakura Soteki"
                },
                {
                    quote: "A flower falls, even though we love it; and a weed grows, even though we do not love it.",
                    author: "Dogen Zenji"
                },
                {
                    quote: "Random probability is just as good of a measure determining success as any other.",
                    author: ""
                },
                {
                    quote: "Love is not forced, nor is it convenient.",
                    author: ""
                },
                {
                    quote: "Nobody cares.",
                    author: ""
                },
                {
                    quote: "Bist du ein Gott?",
                    author: ""
                },
                {
                    quote: "There's a sucker born every minute.",
                    author: "P. T. Barnum"
                },
                {
                    quote: "People don't forget.",
                    author: "Johna Hill from superbad"
                },
                {
                    quote: "Everybody hates a contrarian, no matter how right they are.",
                    author: ""
                },
                {
                    quote: "You are only allowed to criticize the old gods.",
                    author: ""
                },
                {
                    quote: "A good plan violently executed today is better than a perfect plan executed next week.",
                    author: "George S. Patton"
                },
                {
                    quote: "Why you crying?",
                    author: "A hispanic woman I worked with who said this to me every time I complained"
                },
                {
                    quote: "Après moi, le déluge.",
                    author: "Madame de Pompadour"
                },
                {
                    quote: "I trust your effort, but not your intent.",
                    author: ""
                },
                {
                    quote: "Das Schicksal mischt die Karten, und wir spielen.",
                    author: "Arthur Schopenhauer"
                },
                {
                    quote: "A soldier will fight long and hard for a bit of coloured ribbon.",
                    author: "Napoleon Bonaparte"
                },
                {
                    quote: "Men are moved by two levers only: fear and self interest.",
                    author: "Napoleon Bonaparte"
                },
                {
                    quote: "The most painful state of being is remembering the future, particularly the one you'll never have.",
                    author: "Søren Kierkegaard"
                },
                {
                    quote: "In addition to my other numerous acquaintances, I have one more intimate confidant...My melancholy is the most faithful mistress I have known - no wonder, then, that I return the love.",
                    author: "Søren Kierkegaard"
                },
                {
                    quote: "Love is the expression of the one who loves, not of the one who is loved. Those who think they can love only the people they prefer do not love at all. Love discovers truths about individuals that others cannot see.",
                    author: "Søren Kierkegaard"
                },
                {
                    quote: "The future is built upon the infrastructure of the past.",
                    author: ""
                },
                {
                    quote: "Idle hands are the devils workshop.",
                    author: "Proverbs 16:27; St. Jerome quote \"Engage in some occupation, so that the devil may always find you busy.\""
                },
                {
                    quote: "Wenn du lange in einen Abgrund blickst, blickt der Abgrund auch in dich hinein.",
                    author: "Friedrich Nietzsche"
                },
                {
                    quote: "Deep down, I am just an artist too afraid to starve.",
                    author: ""
                },
                {
                    quote: "One should not criticize the past with the morality of the present, otherwise the future will do the same.",
                    author: ""
                },
                {
                    quote: "Layoffs are ritual sacrifices to the quarterly gods.",
                    author: "Inspired by a hackernews comment"
                },
                {
                    quote: "Pessimisten sind Optimisten mit mehr Erfahrung.",
                    author: ""
                },
                {
                    quote: "Many hands make light work.",
                    author: ""
                },
                {
                    quote: "Every age, and especially our own, stands in need of a Diogenes; but the difficulty is in finding men who have the courage to be one, and men who have the patience to endure one.",
                    author: "Jean le Rond d'Alembert"
                },
                {
                    quote: "There are only two kinds of certain knowledge: Awareness of our own existence and the truths of mathematics.",
                    author: "Jean le Rond d'Alembert"
                },
                {
                    quote: "Talent is simply structured learning, drills, and muscle memory multiplied by time.",
                    author: ""
                },
                {
                    quote: "There is nothing more permanent than a temporary solution.",
                    author: ""
                },
                {
                    quote: "The ability to play chess is the sign of a gentleman. The ability to play chess well is the sign of a wasted life.",
                    author: "Paul Morphy"
                },
                {
                    quote: "The inventor that will have a new law is to go out and bring it in; and they that are for the law in possession must keep the House, for they sit to continue it.",
                    author: "Sir Edward Coke"
                },
                {
                    quote: "Always assume that the average man is more intelligent than he has thus far demonstrated, for he may biding his time just like you.",
                    author: ""
                },
                {
                    quote: "It is faster to follow the wind than it is to make your own.",
                    author: ""
                },
                {
                    quote: "Knowledge has a curse, in that it is more prudent to conceal than to reveal.",
                    author: ""
                },
                {
                    quote: "Emulation is the beginning to all learning.",
                    author: ""
                },
                {
                    quote: "At twenty-two many things are allowed which are no longer permitted past thirty.",
                    author: "Napoleon to Elector Frederick of Würtemberg"
                },
                {
                    quote: "Use great providence and circumspection in choosing thy wife. For from thence will spring all thy future good and evil. And it is an action of life, like unto a stratagem of war, wherein a man can err but once. If thy estate be good, match near at home and at leisure, if weak, far off and quickly. Enquire diligently of her disposition and how her parents have been inclined in their youth. Let her not be poor, how generous soever. For a man can buy nothing in the market with gentility.",
                    author: "Lord Burghley, William Cecil, to his son, Robert Cecil"
                },
                {
                    quote: "The measurement of a doing a good job is not based on what is actually achieved, but simply by what is perceived.",
                    author: ""
                },
                {
                    quote: "You're born, you take shit. You get out in the world, you take more shit. You climb a little higher, you take less shit. Till one day you're up in the rarefied atmosphere and you've forgotten what shit even looks like. Welcome to the layer cake, son.",
                    author: "Quote from Layer Cake"
                },
                {
                    quote: "There is no danger in a merry man but only in a sullen and melancholy, as Caesar feared not Brutus, but pale and sad Cassius.",
                    author: "Edward Coke to Prince Charles"
                },
                {
                    quote: "No man is rich enough to buy back his past.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "Deceiving others. That is what the world calls a romance.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "As head of the State, the prince has nothing to fear from the atheist who keeps silent and does not dogmatize. The wretched man, guilty in God's eyes, is harmful only to himself and not to others; the party man, the religious controversialist, upsets the State by his futile disputes.",
                    author: "Jean le Rond d'Alembert"
                },
                {
                    quote: "We shall philosophize together on the futility of life, the folly of men, the vanity of stoicism, and the insignificance of our existence.",
                    author: "Frederick the Great to d'Alembert"
                },
            ],
        specialButton: {
            include: true,
            hasImage: false,
            hrefSrcText: "",
            spanText: "Cole Lamers",
            isSpecial: true
        }
    };
}