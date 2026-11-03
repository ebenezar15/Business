/* MBA Studio — Marketing Management V: Communications & Long-term Growth */
MBA.addTrack({
  id: 'mm-comms',
  stage: 5,
  order: 33,
  title: 'Marketing Management V: Communications & Long-term Growth',
  icon: '📣',
  color: '#ca8a04',
  series: 'Marketing Management',
  part: 'Part V · Communicating value and growing',
  tagline: 'Say it, sell it, launch it, take it abroad and run it for the long haul',
  summary: `The final part of the series. You will plan integrated communications from objective to budget, run advertising, promotion, events, PR, digital, word of mouth and a sales force as one system, take new offerings from idea to mass adoption, adapt a marketing programme for other countries, and organise, audit and control marketing so it creates value for years, not quarters.`,
  outcomes: [
    'Design an integrated communications plan: audience, objectives, message, channels, budget and measurement',
    'Plan advertising with the 5 Ms, judge reach, frequency and impact, and evaluate promotions on incremental profit',
    'Size, structure and pay a sales force, and run the personal-selling process from prospect to follow-up',
    'Run a stage-gate new-product process and forecast adoption with a trial-repeat model',
    'Choose global entry modes and decide what to standardise and what to adapt',
    'Organise the marketing function, practise socially responsible marketing, and control it with audits and profitability analysis'
  ],
  lessons: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: 'mm-comms-1',
      title: 'Integrated marketing communications: the mix, the models and the plan',
      level: 'Beginner',
      minutes: 15,
      hook: `Customers meet your brand in dozens of places a week — if each place tells a different story, you are paying to confuse them.`,
      eli5: `Imagine a school play. The posters, the announcement in assembly, the leaflet sent home, and what the actors say on stage should all tell the same story: when it is, why it is fun, and how to get a seat. If the poster says Friday and the leaflet says Saturday, people stay home. <b>Integrated marketing communications</b> is making every "poster" a company uses — ads, social posts, salespeople, events, packaging — tell one clear story to the right audience, in the right order, for a sensible amount of money.`,
      blocks: [
        {
          type: 'text', title: 'What marketing communications are for',
          html: `<p>Marketing communications are how a firm <b>informs, persuades and reminds</b> people about its brands. They give a brand a voice, link it to people, places, feelings and experiences, and give customers a reason to act now.</p><p>You met promotion as one of the 4Ps in <a href="#/lesson/marketing-1">Marketing 1</a> and saw how brands build memory in <a href="#/lesson/marketing-3">Marketing 3</a>. Here we go deeper: <span class="hl">the full mix, how messages actually travel, and a step-by-step method for building a plan and a budget.</span></p>`
        },
        {
          type: 'map', title: 'The communications mix: eight ways to reach people', center: 'Communications mix',
          branches: [
            { label: 'Advertising', desc: 'Paid, non-personal presentation of ideas by an identified sponsor. Builds reach and memory at scale.', children: ['TV & CTV', 'Online video', 'Outdoor', 'Print', 'Audio'] },
            { label: 'Sales promotion', desc: 'Short-term incentives that push trial or purchase now.', children: ['Coupons', 'Samples', 'Bundles', 'Trade deals'] },
            { label: 'Events & experiences', desc: 'Company-sponsored activities that create brand-related moments people take part in.', children: ['Sponsorships', 'Pop-ups', 'Tours'] },
            { label: 'PR & publicity', desc: 'Programmes that build or protect the image of the firm and its products, often through earned media.', children: ['Press', 'Thought leadership', 'Crisis comms'] },
            { label: 'Online & social', desc: 'Activities and content that engage people online, directly or through communities.', children: ['Websites', 'Search', 'Social', 'Creators'] },
            { label: 'Mobile', desc: 'Communication through phones and apps: messaging, in-app, location-based offers.', children: ['WhatsApp', 'Push', 'In-app'] },
            { label: 'Direct & database', desc: 'Addressed messages to known individuals using customer data.', children: ['Email', 'Direct mail', 'CRM'] },
            { label: 'Personal selling', desc: 'Face-to-face or live interaction to present, answer objections and close.', children: ['Field sales', 'Inside sales', 'Key accounts'] }
          ]
        },
        {
          type: 'flow', title: 'The macro model: how a message travels', when: 'Use it to find where a campaign is breaking down — the idea, the encoding, the channel or the audience.',
          steps: [
            { label: 'Sender', desc: 'The brand decides what it wants a specific audience to think, feel or do.' },
            { label: 'Encoding', desc: 'The idea is turned into words, images, sounds and symbols — a script, a visual, a jingle, a demo.' },
            { label: 'Message & media', desc: 'The encoded message is carried by a channel: a CTV spot, a creator video, a salesperson, a pack.' },
            { label: 'Decoding', desc: 'The receiver interprets it through their own experience, culture and mood. Meaning is made here, not at the agency.' },
            { label: 'Did the meaning survive the noise?', kind: 'decision', desc: 'Noise is everything that distorts or drowns the message: clutter, distraction, competitor ads, poor targeting, selective attention and selective distortion.', branches: [ { label: 'Yes', to: 'Receiver responds as intended' }, { label: 'No', to: 'Re-encode, re-target or change channel' } ] },
            { label: 'Response & feedback', desc: 'The receiver acts (searches, clicks, visits, buys, ignores) and the sender reads that response to improve the next message.' }
          ]
        },
        {
          type: 'compare', title: 'Micro models: the response hierarchies', headers: ['Stage', 'AIDA', 'Hierarchy of effects', 'Innovation adoption'],
          rows: [
            ['Cognitive (think)', 'Attention', 'Awareness → Knowledge', 'Awareness'],
            ['Affective (feel)', 'Interest → Desire', 'Liking → Preference → Conviction', 'Interest → Evaluation'],
            ['Behavioural (do)', 'Action', 'Purchase', 'Trial → Adoption'],
            ['Best used for', 'Ad copy and sales pitches', 'Setting staged communication objectives', 'New categories and new technology']
          ]
        },
        {
          type: 'pyramid', invert: true, title: 'The hierarchy of effects as a funnel',
          levels: [
            { label: 'Awareness', note: 'Have they heard of us?', desc: 'If most of the target has never heard of you, the first job is reach and memorable branding, not argument.' },
            { label: 'Knowledge', note: 'Do they know what we offer?', desc: 'People may know the name but not what it does or who it is for. Explain the category and the point of difference.' },
            { label: 'Liking', note: 'Do they feel good about us?', desc: 'Find out why feelings are lukewarm or negative. Fix real product problems before trying to fix perception.' },
            { label: 'Preference', note: 'Do they pick us over rivals?', desc: 'Promote the specific benefits that beat the alternatives on what this audience values.' },
            { label: 'Conviction', note: 'Are they sure enough to act?', desc: 'Reduce perceived risk: proof, reviews, guarantees, demos, trials.' },
            { label: 'Purchase', note: 'Do they actually buy?', desc: 'Remove friction: availability, an offer with a deadline, a simple path to buy.' }
          ]
        },
        {
          type: 'flow', title: 'Developing effective communications: eight steps',
          steps: [
            { label: '1. Identify the target audience', desc: 'Users or buyers, current or potential, deciders or influencers. Map their image of the brand today against the image you need.' },
            { label: '2. Set objectives', desc: 'Pick the job: build category need, create brand awareness (recognition or recall), shift brand attitude, or trigger purchase intention.' },
            { label: '3. Design the communication', desc: 'Message strategy (what to say), creative strategy (how to say it: informational or transformational appeal), and message source (who says it: credible, likeable, expert endorsers).' },
            { label: '4. Select channels', desc: 'Personal (sales, advocates, experts, word of mouth) and non-personal (media, atmospheres, events). Personal persuades more; non-personal scales.' },
            { label: '5. Set the budget', desc: 'Affordable, percentage-of-sales, competitive-parity or objective-and-task. Only the last starts from what must be achieved.' },
            { label: '6. Decide the mix', desc: 'Split money across the eight tools based on the product market, buyer readiness and life-cycle stage.' },
            { label: '7. Measure results', desc: 'Did people see it, remember it, feel differently, and act? Track communication effects and sales effects.' },
            { label: '8. Manage IMC', desc: 'One idea, consistent assets, coordinated timing, one owner for the whole customer view — not a separate plan per agency.' }
          ]
        },
        {
          type: 'compare', title: 'Four ways to set the communications budget', headers: ['Method', 'How it works', 'Strength', 'Blind spot'],
          rows: [
            ['Affordable', 'Spend what is left after other costs', 'Easy, protects cash', 'Treats communication as a luxury; budgets swing year to year'],
            ['Percentage-of-sales', 'Spend a fixed share of current or forecast sales', 'Ties spend to what the firm can bear', 'Backwards logic: sales drive spend, not spend driving sales; cuts spend just when it may be needed'],
            ['Competitive-parity', 'Match rivals or the category share of voice', 'Avoids falling silent against competitors', 'Assumes rivals know best and that your goals are the same as theirs'],
            ['Objective-and-task', 'Define objectives, list the tasks to reach them, cost the tasks', 'Logical, links money to results', 'Needs good assumptions about how much reach and frequency each objective takes']
          ]
        },
        {
          type: 'case', company: 'Apple', year: '1997–2002', title: '"Think Different": a message about values, not specs',
          situation: `When Steve Jobs returned to Apple in 1997 the company was losing money, its product line was confusing and the brand was widely seen as fading against Windows PCs.`,
          decision: `With agency TBWA\\Chiat\\Day, Apple launched "Think Different": black-and-white portraits of figures such as Albert Einstein, Mahatma Gandhi and Martin Luther King Jr., and a voice-over beginning "Here's to the crazy ones". There were no product features. The campaign ran across TV, print and outdoor posters, then the same spirit carried into the colourful iMac launch in 1998.`,
          outcome: `The campaign won major advertising awards, including an Emmy for the TV spot, and is widely credited with restating what Apple stood for — creativity and nonconformity — before its turnaround products arrived. It ran until about 2002.`,
          lesson: `A transformational appeal that is consistent across every channel can reset a brand's meaning. It worked because new products soon delivered on the promise; a values message with no product behind it would have rung hollow.`
        },
        {
          type: 'scenario',
          prompt: `You are launching a new plant-based yoghurt. Finance proposes a communications budget of 5% of forecast first-year sales, the same rule used for the company's mature brands. What do you do?`,
          options: [
            { text: 'Accept 5% — consistency across brands keeps the budget process fair.', feedback: 'Percentage-of-sales suits mature brands defending a position. A launch has to build awareness and trial from zero, which usually costs far more than 5% of small first-year sales.', good: false },
            { text: 'Build an objective-and-task budget: set awareness and trial targets, cost the reach, frequency and sampling needed, then compare with what the business can afford.', feedback: 'Right. Start from the job to be done. If the costed plan is unaffordable, shrink the target market or phase the launch rather than spreading too little money everywhere.', good: true },
            { text: 'Match the share of voice of the market leader in dairy yoghurt.', feedback: 'Competitive parity may be wildly too high or too low for a niche launch, and the leader is defending, not launching.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Integrated marketing communications (IMC)', def: 'Planning all communication tools together so they share one idea, reinforce each other and are timed to move the same audience.' },
        { term: 'Encoding / decoding', def: 'Turning an idea into words and images (encoding) and the receiver interpreting them (decoding). Messages fail when the two do not match.' },
        { term: 'Noise', def: 'Anything that distorts or blocks a message: clutter, distraction, competing messages, selective attention.' },
        { term: 'Informational appeal', def: 'A message built on attributes, benefits and proof — problem-solution, demonstration, comparison.' },
        { term: 'Transformational appeal', def: 'A message built on feelings, identity or a non-product benefit — who you become or how you feel when you use the brand.' },
        { term: 'Objective-and-task method', def: 'Setting the budget by defining communication objectives, listing the tasks needed and costing them.' },
        { term: 'Share of voice', def: 'A brand\'s share of all advertising or communication in its category.' }
      ],
      quiz: [
        { q: 'In the macro communications model, where is the meaning of a message actually formed?', options: ['At encoding, by the agency', 'At decoding, by the receiver', 'In the media plan', 'At the feedback stage'], answer: 1, explain: 'Receivers interpret messages through their own experience and context. A brilliant script that is decoded differently has failed.' },
        { q: 'A brand is well known but most of the target audience feels neutral about it. Which hierarchy-of-effects stage should the next campaign target?', options: ['Awareness', 'Purchase', 'Liking', 'Knowledge'], answer: 2, explain: 'Awareness and knowledge are already in place; the gap is feeling, so the job is to build liking — after checking there is no real product problem.' },
        { q: 'Which budgeting method starts from what the communication must achieve?', options: ['Affordable', 'Percentage-of-sales', 'Competitive-parity', 'Objective-and-task'], answer: 3, explain: 'Objective-and-task defines objectives, lists tasks and costs them. The others start from money available or what rivals do.' },
        { q: 'Your target is 1,000,000 people. To reach 50% of them an average of 4 times, how many impressions do you need?', options: ['2,000,000', '500,000', '4,000,000', '200,000'], answer: 0, explain: 'Impressions = audience × reach × frequency = 1,000,000 × 0.5 × 4 = 2,000,000.' },
        { q: 'Which is the clearest example of a transformational appeal?', options: ['A chart comparing battery life with rivals', 'A film showing how confident a teenager feels in new trainers', 'A coupon for 20% off', 'A list of ingredients'], answer: 1, explain: 'Transformational appeals sell a feeling or identity rather than an attribute or a deal.' }
      ],
      challenge: {
        title: 'Budget a launch from the job, not the ratio',
        prompt: `You are launching a sparkling tea in one region. Target audience: 2,000,000 adults. Objectives for the first six months: <b>40% aware</b> and <b>80,000 people trying it</b>.<br><br>Assumptions from past launches: to hit 40% awareness you need <b>60% reach at an average frequency of 5</b>; media costs <b>$8 per thousand impressions (CPM)</b>. One in ten aware people will try if given a free sample, and <b>25%</b> of distributed samples get used; each sample costs <b>$0.50</b>. Creative production costs <b>$40,000</b> and tracking research <b>$12,000</b>.<br><br>Finance proposes 8% of forecast first-year sales of $2.0 million. Build an objective-and-task budget, compare it and recommend.`,
        hints: ['Impressions = audience × reach × frequency; media cost = impressions ÷ 1,000 × CPM.', 'Work backwards from 80,000 triers to the number of samples you must hand out.', 'If the two budgets differ, think about what you would cut: the target or the money.'],
        model: `<p><b>1. Awareness task</b></p><ul><li>Impressions = 2,000,000 × 0.60 × 5 = <b>6,000,000</b></li><li>Media = 6,000,000 ÷ 1,000 × $8 = <b>$48,000</b></li></ul><p><b>2. Trial task</b></p><ul><li>Aware people = 2,000,000 × 40% = 800,000; 10% of them = 80,000 triers — matches the goal.</li><li>Samples needed = 80,000 ÷ 25% usage = <b>320,000</b>; cost = 320,000 × $0.50 = <b>$160,000</b></li></ul><p><b>3. Total objective-and-task budget</b> = $48,000 + $160,000 + $40,000 + $12,000 = <b>$260,000</b>.</p><p><b>4. Compare:</b> 8% of $2.0m = $160,000, which is $100,000 short — roughly enough for sampling alone, with no awareness media.</p><p><b>Recommendation:</b> fund the $260,000 for the launch region, because trial is the main driver of a new drink and awareness makes sampling convert. If finance cannot stretch, keep the plan whole but <b>shrink the geography</b> (for example to the two largest cities) rather than cut every line by a third. Report awareness and trial monthly so the spend can be stopped early if the trial-to-repeat rate disappoints.</p>`
      },
      takeaways: [
        'IMC means one idea, carried consistently across every tool and timed to move the same audience.',
        'Messages fail at encoding, at decoding or in the noise — diagnose which before changing the creative.',
        'Use the response hierarchy to pick the one stage your audience is stuck at, and aim the objective there.',
        'Objective-and-task is the only budgeting method that starts from the result you want.'
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: 'mm-comms-2',
      title: 'Mass communications: advertising, media, promotion, events and PR',
      level: 'Intermediate',
      minutes: 17,
      hook: `Half of advertising may be wasted — the modern marketer's job is to find out which half with evidence, not guesswork.`,
      eli5: `Think of shouting to a whole stadium versus whispering to one friend. Mass communication is the stadium: you reach thousands at once, but you cannot check that each person heard you. So you need a plan — what you want people to remember, how many times they need to hear it, which loudspeakers to use, and how you will check afterwards whether anyone changed their mind or bought something.`,
      blocks: [
        {
          type: 'framework', name: 'The 5 Ms of an advertising programme', by: 'Standard advertising planning checklist', when: 'Every time you brief an agency or approve an advertising plan',
          steps: [
            { label: 'Mission', desc: 'What is the ad for? Inform (new category), persuade (build preference), remind (keep the brand top of mind) or reinforce (reassure recent buyers). Tie it to a sales goal.' },
            { label: 'Money', desc: 'Budget depends on life-cycle stage, market share, competition and clutter, the frequency needed and how substitutable the product is. Launches and low-share brands need more relative to sales.' },
            { label: 'Message', desc: 'Generate and evaluate ideas, then execute them: style, tone, words, format. A good message is desirable, exclusive and believable.' },
            { label: 'Media', desc: 'Decide reach, frequency and impact; choose media types and vehicles; set timing and geographic allocation.' },
            { label: 'Measurement', desc: 'Pre-test and post-test the communication effect, and estimate the sales effect with experiments or modelling.' }
          ]
        },
        {
          type: 'formula', name: 'Reach, frequency and the cost of attention',
          expr: 'GRPs = Reach (%) × Average frequency;   CPM = Media cost ÷ (Impressions ÷ 1,000)',
          explain: `<b>Reach</b> is the share of the target exposed at least once in a period. <b>Frequency</b> is how many times the average reached person is exposed. <b>Gross rating points (GRPs)</b> combine the two into a measure of weight. <b>Impact</b> is the quality of an exposure — a demo on a big screen hits harder than a skipped pre-roll. <b>CPM</b> compares cost per thousand impressions across vehicles.`,
          example: `A CTV plan reaches 60% of the target an average of 4 times: GRPs = 60 × 4 = 240. It costs $30,000 for 2,000,000 impressions: CPM = $30,000 ÷ 2,000 = $15. A social plan at $6 CPM looks cheaper, but if half of its "impressions" are scrolled past in under a second, the cost per <i>attentive</i> impression may be higher.`
        },
        {
          type: 'map', title: 'Media types in 2026: what each is good for', center: 'Media choice',
          branches: [
            { label: 'Linear TV & CTV', desc: 'Big-screen, sight-and-sound impact. Connected TV adds targeting and streaming ad tiers (Netflix launched one in 2022; Prime Video turned ads on by default in 2024).', children: ['Reach', 'Impact', 'Brand building'] },
            { label: 'Online video', desc: 'YouTube and short-form video: flexible, measurable, but attention varies widely by format.', children: ['Skippable', 'Shorts', 'Bumpers'] },
            { label: 'Retail media', desc: 'Ads sold by retailers and marketplaces on their own sites and apps, using their shopper data, close to the point of purchase.', children: ['Amazon Ads', 'Walmart Connect', 'Quick commerce'] },
            { label: 'Search & social', desc: 'Captures existing intent (search) or interrupts with targeted content (social).', children: ['Intent', 'Targeting'] },
            { label: 'Creators', desc: 'Paid partnerships with people whose audiences trust them. Sits between advertising and word of mouth.', children: ['Disclosure', 'Whitelisting'] },
            { label: 'Audio', desc: 'Radio, streaming and podcasts: cheap frequency, strong for host-read ads.', children: ['Podcasts', 'Streaming'] },
            { label: 'Out-of-home', desc: 'Billboards, transit and digital screens: local reach and fame, hard to skip.', children: ['DOOH', 'Transit'] },
            { label: 'Print', desc: 'Newspapers and magazines: credibility, long copy and niche audiences, but shrinking reach.', children: ['Trade press', 'Magazines'] }
          ]
        },
        {
          type: 'callout', kind: 'insight', title: 'The 2026 lens: retail media, CTV and creators blur the old lines',
          html: `<p>Three shifts change how you plan mass media (the channel basics are in <a href="#/lesson/marketing-4">Marketing 4</a>):</p><ul><li><b>Retail media</b> lets brands buy ads using a retailer's own purchase data and see sales in the same system. Powerful, but the retailer grades its own homework, and much of it may be trade spend renamed. Ask what is <i>incremental</i>.</li><li><b>CTV</b> brings TV-style impact with digital targeting. Watch frequency caps across apps, or the same viewer sees your ad ten times.</li><li><b>Creators</b> deliver trust that brand ads cannot, but you rent their credibility: brief them on the idea, then let them speak in their own voice.</li></ul><p><span class="hl">Planning rule:</span> decide the reach and memory job first, then pick media — never the other way round.</p>`
        },
        {
          type: 'compare', title: 'Evaluating advertising: communication effects vs sales effects', headers: ['', 'Communication effects', 'Sales effects'],
          rows: [
            ['Question', 'Did people notice, understand, remember and feel differently?', 'Did the ads cause extra sales or profit?'],
            ['Pre-test methods', 'Concept and copy tests, attention and eye-tracking, emotional response panels', 'Small geographic or audience test cells'],
            ['Post-test methods', 'Brand lift studies, awareness and recall tracking, ad recognition', 'Geo experiments, holdout groups, marketing mix modelling'],
            ['Trap', 'Liked ads that nobody links to the brand', 'Crediting sales that would have happened anyway'],
            ['Use for', 'Fixing the creative', 'Setting the budget']
          ]
        },
        {
          type: 'flow', title: 'Running a sales promotion programme',
          steps: [
            { label: 'Set the objective', desc: 'Consumers: trial, repeat, trade-up, stock-up. Retailers: stocking, display, feature. Sales force: push new items.' },
            { label: 'Choose the tools', desc: 'Consumer (samples, coupons, cash-back, bundles, loyalty points, contests), trade (allowances, free goods, display support), business (trade shows, sales contests, specialty items).' },
            { label: 'Develop the programme', desc: 'Size of incentive, conditions to qualify, duration, distribution vehicle, timing and total budget (administration plus incentive cost times expected take-up).' },
            { label: 'Does the pre-test show real incremental sales?', kind: 'decision', desc: 'Run it in a few stores or a small audience slice before going national.', branches: [ { label: 'Yes', to: 'Implement' }, { label: 'No', to: 'Redesign the incentive or drop it' } ] },
            { label: 'Implement', desc: 'Lead time to prepare stock, materials and the sales force; sell-in time until the promotion ends.' },
            { label: 'Evaluate', desc: 'Compare sales before, during and after. Subtract the post-promotion dip and the discount given to people who would have bought anyway.' }
          ]
        },
        {
          type: 'map', title: 'Events, experiences and marketing PR tools', center: 'Earned attention',
          branches: [
            { label: 'Publications', desc: 'Reports, research, newsletters and annual reviews that inform and give journalists material.', children: ['Original data', 'Reports'] },
            { label: 'Events & sponsorships', desc: 'Owned events, sports and arts sponsorships, pop-ups and launches. Choose ones whose audience and values fit the brand.', children: ['Fit', 'Activation'] },
            { label: 'News', desc: 'Creating genuine stories about the company, its people and products that media want to cover.', children: ['Launches', 'Milestones'] },
            { label: 'Speeches & thought leadership', desc: 'Executives speaking at conferences, podcasts and on LinkedIn.', children: ['Keynotes', 'Op-eds'] },
            { label: 'Community & public service', desc: 'Contributions of time and money to causes that matter to customers and employees.', children: ['Volunteering'] },
            { label: 'Identity media', desc: 'Logo, stationery, signage, uniforms, vehicles — consistent visual identity everywhere.', children: ['Assets'] },
            { label: 'Crisis communication', desc: 'Prepared plans to respond fast, honestly and with action when something goes wrong.', children: ['Speed', 'Empathy', 'Action'] }
          ]
        },
        {
          type: 'case', company: 'Tesla', year: '2012–2023', title: 'Building a car brand with almost no paid advertising',
          situation: `Car makers have traditionally been among the biggest advertisers, spending heavily on TV and dealer promotions. Tesla, selling direct rather than through dealers, chose a different path.`,
          decision: `For years Tesla did essentially no traditional paid advertising. It relied on publicity from launches and its CEO's social media following, owner word of mouth, a customer referral programme (which it ended, revived and changed several times), test drives in shopping-centre showrooms, and the product itself. In 2019 Elon Musk publicly said Tesla did not advertise or pay for endorsements.`,
          outcome: `Tesla became the best-selling electric car brand in many markets with very low marketing cost per car compared with traditional rivals. As competition and price pressure grew, Musk said at the 2023 shareholder meeting that Tesla would "try a little advertising", and it began buying some paid search and digital ads.`,
          lesson: `Earned media and word of mouth can substitute for advertising when a product is newsworthy and the founder commands attention — but that advantage fades as a category matures and rivals catch up, and it ties the brand's reputation closely to one person.`
        },
        {
          type: 'checklist', title: 'Before you sign off a media plan',
          items: [
            'The mission (inform, persuade, remind, reinforce) is written down and linked to a sales goal',
            'Reach and frequency targets are justified, not copied from last year',
            'Frequency is capped across CTV apps and social platforms',
            'At least one channel is tested with a holdout or geo experiment',
            'Promotions are judged on incremental profit after the post-promotion dip',
            'PR and events carry the same idea and brand assets as the paid media',
            'Every creator partnership has clear disclosure'
          ]
        }
      ],
      terms: [
        { term: 'Reach', def: 'The percentage of the target audience exposed to a message at least once in a period.' },
        { term: 'Frequency', def: 'The average number of times a reached person is exposed in that period.' },
        { term: 'Gross rating points (GRPs)', def: 'Reach (%) × average frequency; a measure of total advertising weight.' },
        { term: 'CPM', def: 'Cost per thousand impressions, used to compare media vehicles.' },
        { term: 'Retail media', def: 'Advertising sold by retailers and marketplaces on their own platforms, targeted with their shopper data.' },
        { term: 'Trade promotion', def: 'Incentives given to retailers or distributors — allowances, free goods, display money — to stock, feature or display a product.' },
        { term: 'Marketing PR', def: 'Public relations activities used to support marketing goals: launches, repositioning, building interest and defending reputation.' }
      ],
      quiz: [
        { q: 'A plan reaches 50% of the target an average of 3 times. What are its GRPs?', options: ['53', '150', '17', '300'], answer: 1, explain: 'GRPs = reach × frequency = 50 × 3 = 150.' },
        { q: 'Which of the 5 Ms covers deciding between inform, persuade and remind?', options: ['Mission', 'Money', 'Message', 'Media'], answer: 0, explain: 'The mission defines what the advertising must achieve; the other Ms follow from it.' },
        { q: 'A coupon lifts sales 40% for four weeks, then sales dip below normal for two weeks. What must a proper evaluation do?', options: ['Report the 40% lift', 'Ignore the dip as seasonal', 'Subtract the dip and the discount paid to people who would have bought anyway', 'Compare against the best week of last year'], answer: 2, explain: 'Many promotions just pull purchases forward and subsidise loyal buyers. Incremental profit is what counts.' },
        { q: 'Which measure tells you whether ads caused sales rather than just appeared near them?', options: ['Ad recall', 'Platform-reported ROAS', 'Number of impressions', 'A geo experiment with holdout regions'], answer: 3, explain: 'Only an experiment (or a model calibrated by one) separates cause from correlation.' },
        { q: 'Media A costs $24,000 for 3,000,000 impressions. What is its CPM?', options: ['$8', '$0.80', '$80', '$12'], answer: 0, explain: 'CPM = $24,000 ÷ (3,000,000 ÷ 1,000) = $24,000 ÷ 3,000 = $8.' }
      ],
      challenge: {
        title: 'Did the coupon make money?',
        prompt: `A snack brand normally sells <b>10,000 packs a week</b> at a contribution of <b>$3 per pack</b>. It runs a <b>$1-off coupon</b> for four weeks (every pack sold in those weeks gets the discount, via an on-pack offer). Fixed promotion costs (design, printing, retailer fees) are <b>$10,000</b>.<br><br>Results: sales of <b>16,000 a week</b> during the four promotion weeks, then <b>8,000 a week</b> for two weeks after, then back to normal.<br><br>(a) How many incremental packs did the promotion create over the six weeks? (b) Did it increase or decrease profit compared with doing nothing? (c) What would you change next time?`,
        hints: ['Baseline over six weeks is 60,000 packs at $3 contribution.', 'During the promotion, contribution falls to $2 per pack on every pack, not just the extra ones.', 'Look at who received the discount.'],
        model: `<p><b>(a) Incremental volume</b></p><ul><li>Promotion weeks: 4 × (16,000 − 10,000) = +24,000</li><li>Dip weeks: 2 × (8,000 − 10,000) = −4,000</li><li><b>Net incremental = 20,000 packs</b> (80,000 sold vs 60,000 baseline)</li></ul><p><b>(b) Profit</b></p><ul><li>Do nothing: 60,000 × $3 = <b>$180,000</b></li><li>Promotion: 64,000 × $2 = $128,000 during + 16,000 × $3 = $48,000 after − $10,000 fixed = <b>$166,000</b></li><li>The promotion <b>lost $14,000</b> despite a 60% sales lift in promotion weeks.</li></ul><p><b>Why:</b> the 24,000 extra promotion-week packs earned $48,000, but the dip cost $12,000, the $1 given to the 40,000 packs that would have sold anyway cost $40,000, and fixed costs were $10,000: $48,000 − $12,000 − $40,000 − $10,000 = −$14,000.</p><p><b>(c) Next time:</b> target the incentive at non-buyers (a coupon delivered to lapsed or new shoppers, or a trial-size pack) rather than an on-pack discount everyone gets; run it in a test region first; and judge it only if trial converts to repeat buying afterwards. A pure volume spike is not a win.</p>`
      },
      takeaways: [
        'Plan advertising with the 5 Ms, starting from the mission.',
        'Reach and frequency set the weight; impact and attention decide whether the weight counts.',
        'Retail media, CTV and creators are powerful, but always ask what is incremental.',
        'Judge promotions on incremental profit, after the dip and the subsidy to loyal buyers.',
        'PR and events earn attention that paid media cannot buy — if they carry the same idea.'
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: 'mm-comms-3',
      title: 'Personal communications: direct, digital, word of mouth and the sales force',
      level: 'Intermediate',
      minutes: 18,
      hook: `The most persuasive channel any company has is a person — a friend, a creator or a salesperson — and it is also the hardest to scale and the easiest to abuse.`,
      eli5: `If a stranger on TV says a bike is great, you might shrug. If your best friend lets you ride hers, you probably want one. Personal communication works because it is two-way and trusted: someone answers your questions and you trust them. Companies use it through emails written to you by name, online communities, people recommending things, and salespeople. The skill is to make it feel personal and honest at large scale — without tricking anyone.`,
      blocks: [
        {
          type: 'text', title: 'From broadcast to conversation',
          html: `<p>Personal communications are <b>addressed or interactive</b>: a message to a known person, a conversation in a community, a recommendation between friends, or a seller in the room. They are slower and costlier per contact than mass media, but they <span class="hl">answer questions, handle doubts and close</span>.</p><p>You have already met pipeline and qualification in <a href="#/lesson/sales-2">Sales 2</a> and the basics of BATNA and ZOPA in <a href="#/lesson/negotiation-1">Negotiation 1</a>. This lesson goes up a level: designing the whole personal-communication system, including the sales force itself.</p><p><b>Negotiation inside selling.</b> Negotiate only when price and terms are genuinely open and after value is established. Never concede for free: <span class="hl">trade</span> each concession (price for volume, payment terms for contract length), and bundle several issues into packages so both sides can win on what they value most.</p><p><b>Relationship marketing.</b> For key accounts the goal is not the next order but the lifetime of the account: joint planning, shared performance reviews, dedicated service teams, and earning the right to grow wallet share. A seller who wins a deal by squeezing the buyer often loses the renewal.</p>`
        },
        {
          type: 'map', title: 'Direct and interactive marketing channels', center: 'Direct & interactive',
          branches: [
            { label: 'Email & CRM', desc: 'Owned, cheap and measurable. Works when segmented by behaviour and permission-based.', children: ['Lifecycle', 'Triggers'] },
            { label: 'Direct mail & catalogues', desc: 'Physical, high attention, costly. Still strong for high-value and older audiences.', children: ['Catalogues', 'Inserts'] },
            { label: 'Messaging & telemarketing', desc: 'WhatsApp, SMS and calls. Highly personal and highly regulated; consent matters.', children: ['WhatsApp', 'Opt-in'] },
            { label: 'Websites & apps', desc: 'The owned home base where all channels send people. Speed and clarity convert.', children: ['UX', 'Personalisation'] },
            { label: 'Search', desc: 'Paid and organic results, and now AI answer engines, catching people when they are looking.', children: ['SEO', 'GEO', 'Paid search'] },
            { label: 'Display & programmatic', desc: 'Automated buying of banner and video ads across sites, targeted by data.', children: ['Retargeting'] },
            { label: 'Social & communities', desc: 'Brand pages, groups and forums where customers talk to the brand and each other.', children: ['Communities', 'Groups'] },
            { label: 'Mobile', desc: 'Apps, push notifications and location-based offers; the phone is the main screen for most people.', children: ['Push', 'Location'] }
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Customer data and ethics: the line you must not cross',
          html: `<p>Direct marketing runs on customer data, so it carries the biggest privacy and trust risks (the legal side is in <a href="#/lesson/legal-4">Legal 4</a>).</p><ul><li><b>Consent and purpose</b>: use data only for what people agreed to.</li><li><b>Frequency</b>: too many messages are a cost to the customer, not free reach.</li><li><b>Vulnerable groups</b>: no aggressive targeting of children, the indebted or the unwell.</li><li><b>Disclosure</b>: paid endorsements must be clearly labelled. In the US the FTC revised its Endorsement Guides in 2023; India's ASCI introduced influencer disclosure rules in 2021. In 2022 Kim Kardashian paid the US SEC $1.26 million to settle charges that she promoted a crypto token on Instagram without disclosing she had been paid $250,000.</li></ul>`
        },
        {
          type: 'cycle', title: 'The word-of-mouth loop', center: 'Advocacy',
          steps: [
            { label: 'Remarkable experience', desc: 'People talk about what surprised them — a product that delights, a service story, something genuinely new.' },
            { label: 'Seed with opinion leaders', desc: 'Give early access to people others listen to: experts, creators, community moderators, heavy users.' },
            { label: 'Share & buzz', desc: 'Make it easy and rewarding to talk: shareable moments, referral codes, user-generated content prompts.' },
            { label: 'Amplify', desc: 'Repost the best customer content and creator reviews into paid media, with permission.' },
            { label: 'Convert & onboard', desc: 'New customers arrive with high trust; deliver a first experience that matches what they were told.' },
            { label: 'Measure', desc: 'Track mentions, share of conversation, sentiment, referral sign-ups and the share of customers who say a friend told them.' }
          ]
        },
        {
          type: 'flow', title: 'Designing the sales force',
          steps: [
            { label: 'Objectives', desc: 'What do reps do: prospecting, targeting, communicating, selling, servicing, information gathering, allocating scarce stock? Weight them by strategy.' },
            { label: 'Strategy', desc: 'Who sells to whom and how: one rep to one buyer, teams to buying centres, key account managers, inside sales, partners.' },
            { label: 'Structure', desc: 'Territorial (simple, clear), product (complex technical lines), market or customer (by industry or size), or a mix.' },
            { label: 'Size', desc: 'Use the workload approach: accounts by size class × calls each needs ÷ calls one rep can make in a year.' },
            { label: 'Compensation', desc: 'Fixed salary for stability, variable commission or bonus for effort, expenses and benefits. The mix depends on how much the rep controls the sale.' }
          ]
        },
        {
          type: 'formula', name: 'Workload approach to sales force size',
          expr: 'Reps needed = Σ (Accounts in class × Calls per account per year) ÷ Calls one rep can make per year',
          explain: `Group customers by value (A, B, C). Decide how often each class must be visited. Estimate a rep's annual call capacity after travel, admin and training time.`,
          example: `Illustrative: 1,000 A accounts × 36 calls = 36,000; 2,000 B accounts × 12 calls = 24,000. Total 60,000 calls. A rep makes 1,000 calls a year, so you need <b>60 reps</b>. Moving B accounts to inside sales would cut field reps to 36.`
        },
        {
          type: 'flow', title: 'The personal-selling process',
          steps: [
            { label: 'Prospecting & qualifying', desc: 'Find leads and check fit, budget, authority and need before investing time.' },
            { label: 'Pre-approach', desc: 'Research the company, the buying centre, their goals and the best way and moment to approach.' },
            { label: 'Presentation & demonstration', desc: 'Tell the value story in the buyer\'s terms: features turned into benefits and proof for this customer.' },
            { label: 'Are there objections?', kind: 'decision', desc: 'Psychological (resistance to change, loyalty to the current supplier) or logical (price, timing, specification).', branches: [ { label: 'Yes', to: 'Probe, reframe, offer proof, trade concessions' }, { label: 'No', to: 'Move to close' } ] },
            { label: 'Closing', desc: 'Ask for the order, a trial or a clear next step; offer a reason to act now that adds value rather than just discount.' },
            { label: 'Follow-up & maintenance', desc: 'Confirm delivery, installation and training, check satisfaction, and plan the next account review.' }
          ]
        },
        {
          type: 'compare', title: 'Paying the sales force: three common mixes', headers: ['', 'Mostly salary', 'Balanced (e.g. 60/40)', 'Mostly commission'],
          rows: [
            ['Best when', 'Long, team-based enterprise sales; service-heavy roles', 'Rep strongly influences outcome but sales cycles are moderate', 'Short transactional sales the rep controls'],
            ['Strength', 'Stability, collaboration, willingness to do non-selling tasks', 'Motivation plus some security', 'Pay closely follows results; low fixed cost'],
            ['Risk', 'Weak push to close', 'Complexity and gaming of targets', 'Short-termism, pushy selling, high turnover'],
            ['Manage with', 'Clear activity and account goals', 'Quota on gross margin, not just revenue', 'Clawbacks and customer-satisfaction gates']
          ]
        },
        {
          type: 'case', company: 'Nykaa', year: '2012–2021', title: 'Content, creators and community as the sales channel',
          situation: `When Falguni Nayar founded Nykaa in India in 2012, buying beauty products online was new to most Indian shoppers, who wanted advice, trusted shop assistants and worried about fakes.`,
          decision: `Nykaa positioned itself as a curated, authentic-products beauty retailer and invested heavily in teaching: tutorial videos, beauty content, partnerships with beauty creators, and community features where customers asked and answered questions and posted reviews. It later added physical stores and its own brands, so online advice and offline trial supported each other.`,
          outcome: `Nykaa became one of India's best-known beauty destinations. Its 2021 stock-market listing was heavily oversubscribed, and it stood out among that year's new-age IPOs for being profitable at listing.`,
          lesson: `Where buyers need reassurance, education and peer voices do the job of the shop assistant. Community and creators are not just "awareness" — they are personal selling at scale, as long as reviews stay authentic and paid partnerships are disclosed.`
        },
        {
          type: 'scenario',
          prompt: `Your head of social wants to pay 200 micro-creators to post about a new skincare serum. To make the posts "feel organic", she suggests asking them not to use #ad and to describe it only as a "gift". What do you decide?`,
          options: [
            { text: 'Go ahead — micro-creators are small, and regulators focus on celebrities.', feedback: 'Disclosure rules apply to paid or gifted endorsements of any size, and undisclosed campaigns damage trust when exposed — often by the creators\' own followers.', good: false },
            { text: 'Run it with clear disclosure (#ad or the platform\'s paid-partnership label), creators free to give honest views, and a ban on claims you cannot substantiate.', feedback: 'Right. Disclosed creator content still performs, honest reviews are more persuasive, and you protect the brand and the creators.', good: true },
            { text: 'Cancel creator marketing entirely and only run brand ads.', feedback: 'Over-correction. Creators can be powerful and ethical when disclosed and briefed properly.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Direct marketing', def: 'Using addressed channels — email, mail, messaging, calls — to reach known individuals and get a measurable response.' },
        { term: 'Opinion leader', def: 'A person whose views on a category others seek and trust: an expert, enthusiast or creator.' },
        { term: 'Buzz / viral marketing', def: 'Creating content or experiences people want to pass on, so reach spreads person to person.' },
        { term: 'Workload approach', def: 'Sizing a sales force from the number of calls accounts need divided by the calls one rep can make.' },
        { term: 'Key account management', def: 'A dedicated person or team managing the relationship with a few large, strategic customers.' },
        { term: 'Relationship marketing', def: 'Building long-term, mutually valuable relationships with customers and partners rather than winning single transactions.' },
        { term: 'Endorsement disclosure', def: 'Clearly telling the audience when a recommendation is paid for, gifted or otherwise connected to the brand.' }
      ],
      quiz: [
        { q: 'A firm has 400 A accounts needing 24 calls a year and 1,200 B accounts needing 6. A rep can make 800 calls a year. How many reps are needed?', options: ['12', '21', '30', '9'], answer: 1, explain: '400 × 24 = 9,600; 1,200 × 6 = 7,200; total 16,800 ÷ 800 = 21 reps.' },
        { q: 'Which step of personal selling involves researching the buying centre before first contact?', options: ['Prospecting', 'Closing', 'Follow-up', 'Pre-approach'], answer: 3, explain: 'Pre-approach is the homework between finding a qualified lead and meeting them.' },
        { q: 'For a long, team-based enterprise sale where many people contribute, which pay mix usually fits best?', options: ['Mostly salary with account goals', 'Pure commission on revenue', 'Commission only on the first order', 'No variable pay and no goals'], answer: 0, explain: 'When no single rep controls the outcome and cycles are long, heavy commission encourages the wrong behaviour; salary with clear goals fits better.' },
        { q: 'What makes word of mouth more persuasive than advertising?', options: ['It is always free', 'It reaches more people', 'It comes from a trusted, independent-seeming source and is two-way', 'Regulators do not cover it'], answer: 2, explain: 'Trust and conversation drive its power — which is exactly why paid word of mouth must be disclosed.' },
        { q: 'A customer says: "We have used our current supplier for ten years." What kind of objection is this?', options: ['Logical, about price', 'Psychological, loyalty to the current supplier', 'A closing signal', 'A specification objection'], answer: 1, explain: 'It is resistance rooted in habit and relationship, not a product argument. Probe what switching would risk for them.' }
      ],
      challenge: {
        title: 'Right-size a field sales force',
        prompt: `An industrial-supplies firm has <b>300 A accounts</b> (24 calls a year each), <b>900 B accounts</b> (12 calls) and <b>1,800 C accounts</b> (4 calls). A field rep works 46 weeks, 4 selling days a week, 5 calls a day. A fully loaded field rep costs <b>$120,000</b> a year.<br><br>The sales director proposes moving all C accounts to an inside-sales team of <b>2 people at $70,000 each</b>, served by phone, video and email.<br><br>(a) How many field reps are needed today? (b) How many after the change, and what is the annual saving? (c) What are the risks, and how would you pay the reps?`,
        hints: ['Annual calls per rep = 46 × 4 × 5.', 'Round reps up, not down.', 'Think about what C accounts might lose and how you would spot it early.'],
        model: `<p><b>(a) Today</b></p><ul><li>Calls needed: 300 × 24 = 7,200; 900 × 12 = 10,800; 1,800 × 4 = 7,200 → <b>25,200</b></li><li>Calls per rep: 46 × 4 × 5 = <b>920</b></li><li>Reps = 25,200 ÷ 920 = 27.4 → <b>28 reps</b> ($3.36m)</li></ul><p><b>(b) After moving C accounts</b></p><ul><li>Field calls: 18,000 ÷ 920 = 19.6 → <b>20 reps</b> ($2.40m)</li><li>Inside team: 2 × $70,000 = $140,000</li><li><b>Saving</b> = (8 × $120,000) − $140,000 = <b>$820,000 a year</b></li></ul><p><b>(c) Risks and design</b></p><ul><li>Some C accounts are future A accounts; flag fast-growing ones for a field visit.</li><li>Inside reps handle 1,800 accounts × 4 contacts = 7,200 contacts, about 3,600 each — feasible by phone and email but watch quality; add a third person if response times slip.</li><li>Pay: field reps on roughly 60/40 salary to variable, with the variable part tied to <b>gross margin</b> and account retention, not just revenue; inside reps on a higher salary share with bonuses for reactivation and upgrades.</li><li>Pilot with half of C accounts for one quarter and compare sales and churn with the other half before switching everyone.</li></ul><p><b>Recommendation:</b> proceed with a controlled pilot; the saving is large and the main risk is measurable.</p>`
      },
      takeaways: [
        'Personal channels persuade most because they are trusted and two-way — and must be honest and disclosed.',
        'Word of mouth is a loop you can design: experience, seed, share, amplify, convert, measure.',
        'Size the sales force with the workload approach and move low-value accounts to cheaper channels.',
        'Match pay mix to how much the rep controls the sale; reward margin and retention, not just revenue.'
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: 'mm-comms-4',
      title: 'Introducing new market offerings: from idea to adoption',
      level: 'Intermediate',
      minutes: 18,
      hook: `Most new products fail not because they are bad, but because nobody checked that enough people wanted them, understood them and could find them.`,
      eli5: `Think of inventing a new board game. You have lots of ideas, so first you throw out the silly ones. Then you describe the best one to friends and see if they want to play. You work out whether you can make it cheaply enough, build a prototype, let a few families try it, and only then print thousands. After launch, a few game-mad friends buy it first, then their friends, then everyone else. A new-product process is that same careful sequence, with "stop or go" checkpoints so you do not waste money on a game nobody plays.`,
      blocks: [
        {
          type: 'compare', title: 'New-product options: make or buy, and how new is "new"?', headers: ['Type', 'What it means', 'Illustrative example', 'Risk'],
          rows: [
            ['New-to-the-world', 'Creates an entirely new market', 'The first consumer drone', 'Highest'],
            ['New product line', 'New to the firm, entering an existing market', 'A phone maker launching a watch', 'High'],
            ['Line addition', 'Extends an existing line', 'A new flavour or pack size', 'Moderate'],
            ['Improvement / revision', 'Better performance replacing an old version', 'Version 2 with longer battery life', 'Lower'],
            ['Repositioning', 'Existing product aimed at a new use or segment', 'A baby shampoo marketed to adults', 'Lower'],
            ['Cost reduction', 'Similar performance at lower cost', 'A cheaper redesign of a component', 'Lowest'],
            ['Buy instead of make', 'Acquire a company, license a product or partner', 'Buying a start-up with a proven product', 'Integration risk instead of development risk']
          ]
        },
        {
          type: 'map', title: 'Why new products fail', center: 'Launch failure',
          branches: [
            { label: 'Market overestimated', desc: 'A leader pushes a favourite idea despite weak research, or the target is too small.', children: ['Pet projects'] },
            { label: 'No clear advantage', desc: 'The product is not meaningfully better or different on what buyers value.', children: ['Me-too'] },
            { label: 'Poor positioning or message', desc: 'People do not understand what it is or who it is for.', children: ['Confusion'] },
            { label: 'Costs higher than planned', desc: 'Development, manufacturing or launch costs swamp the margin.', children: ['Overruns'] },
            { label: 'Weak launch support', desc: 'Too little awareness, sampling or distribution for trial to happen.', children: ['No trial', 'No shelf'] },
            { label: 'Competitive response', desc: 'Rivals cut prices, copy fast or block distribution.', children: ['Fast followers'] },
            { label: 'Shrinking odds', desc: 'Fragmented markets, shorter life cycles, regulation and capital limits make each launch harder.', children: ['Short cycles'] },
            { label: 'Ignored meaning', desc: 'Research tests the product but not the emotional bond people have with what it replaces.', children: ['Brand attachment'] }
          ]
        },
        {
          type: 'flow', title: 'The stage-gate new-product development process', when: 'Run it with a cross-functional team and a senior gatekeeper group. Organisational options for innovation itself are in the Innovation track.',
          steps: [
            { label: 'Idea generation', desc: 'From customers, lead users, employees, sales reps, suppliers, competitors, open innovation and AI-assisted exploration.' },
            { label: 'Gate 1: does the idea pass screening?', kind: 'decision', desc: 'Score fit with strategy, market size, feasibility and advantage. Avoid two errors: dropping a good idea and going ahead with a poor one.', branches: [ { label: 'Pass', to: 'Concept development' }, { label: 'Fail', to: 'Drop or park the idea' } ] },
            { label: 'Concept development & testing', desc: 'Turn the idea into a concept stated in customer terms, test it with target buyers, and use conjoint analysis to see which attribute combinations they value most.' },
            { label: 'Marketing strategy', desc: 'Target market, positioning, first-year sales and share goals, planned price, distribution and budget, long-run goals.' },
            { label: 'Business analysis', desc: 'Forecast sales (first-time, replacement, repeat), costs and profits; break-even and payback.' },
            { label: 'Gate 2: is the business case strong enough to build?', kind: 'decision', desc: 'Senior team commits real development money only here.', branches: [ { label: 'Go', to: 'Product development' }, { label: 'Kill / rework', to: 'Back to concept' } ] },
            { label: 'Product development', desc: 'Prototypes, engineering, safety and customer tests (alpha inside the firm, beta with customers).' },
            { label: 'Market testing', desc: 'Sales-wave tests, simulated test markets, controlled or full test markets in consumer goods; trade shows and trial use in business markets.' },
            { label: 'Commercialisation', desc: 'When (first entry, parallel or late), where (one city, region or roll-out), to whom (early adopters, heavy users) and how (the launch plan).' }
          ]
        },
        {
          type: 'framework', name: 'Conjoint analysis in five steps', by: 'Market research technique', when: 'When you need to know which features and price combinations customers will trade off',
          steps: [
            { label: '1. Choose attributes and levels', desc: 'For an e-bike: range (40, 70, 100 km), weight (18, 23 kg), brand (known, new), price ($900, $1,300, $1,700).' },
            { label: '2. Build profiles', desc: 'Combine levels into realistic product cards using an experimental design so each attribute varies independently.' },
            { label: '3. Ask people to choose', desc: 'Respondents repeatedly pick their preferred option from small sets of cards, as in a real purchase.' },
            { label: '4. Estimate part-worths', desc: 'Statistical models infer how much each level adds to preference, and the relative importance of each attribute.' },
            { label: '5. Simulate the market', desc: 'Predict share for any combination against rivals, and find the feature set and price that maximise profit, not just share.' }
          ]
        },
        {
          type: 'formula', name: 'Trial-repeat forecast for a new consumer product',
          expr: 'Year-1 units = Target households × Awareness × Availability × Trial rate × (Trial units + Repeat rate × Repeat purchases)',
          explain: `Each factor is a gate the product must pass: people must hear of it, find it on a shelf or app, try it, then come back. Weak repeat means a launch can look good for three months and then collapse.`,
          example: `Illustrative: 5,000,000 households × 40% aware × 50% availability × 20% trial = 200,000 triers. If 30% repeat four times: units = 200,000 × (1 + 0.3 × 4) = 200,000 × 2.2 = 440,000.`
        },
        {
          type: 'pyramid', invert: true, title: 'The consumer adoption process',
          levels: [
            { label: 'Awareness', desc: 'The consumer hears of the innovation but knows little about it.' },
            { label: 'Interest', desc: 'They look for information.' },
            { label: 'Evaluation', desc: 'They consider whether trying it makes sense for them.' },
            { label: 'Trial', desc: 'They try it on a small scale — a sample, a free month, a test drive.' },
            { label: 'Adoption', desc: 'They decide to use it fully and regularly.' }
          ]
        },
        {
          type: 'compare', title: 'Diffusion: who adopts when', headers: ['Group', 'Approx. share', 'What drives them', 'How to reach them'],
          rows: [
            ['Innovators', '2.5%', 'Novelty and technology for its own sake; tolerate bugs', 'Specialist forums, beta programmes'],
            ['Early adopters', '13.5%', 'Opinion leaders who adopt early but carefully', 'Creators, trade press, early access'],
            ['Early majority', '34%', 'Deliberate; want proof and references', 'Case studies, reviews, guarantees'],
            ['Late majority', '34%', 'Sceptical; adopt when it is the norm or cheaper', 'Mainstream channels, simpler and cheaper versions'],
            ['Laggards', '16%', 'Tied to tradition; adopt when the old option disappears', 'Make switching effortless']
          ]
        },
        {
          type: 'map', title: 'What speeds or slows adoption', center: 'Rate of adoption',
          branches: [
            { label: 'Relative advantage', desc: 'How clearly better it is than what people use today.', children: ['Speeds'] },
            { label: 'Compatibility', desc: 'How well it fits existing values, habits and systems.', children: ['Speeds'] },
            { label: 'Complexity', desc: 'How hard it is to understand or use.', children: ['Slows'] },
            { label: 'Divisibility (trialability)', desc: 'Whether it can be tried in small, low-risk amounts.', children: ['Speeds'] },
            { label: 'Communicability', desc: 'How easily its benefits can be seen or described to others.', children: ['Speeds'] },
            { label: 'Cost, risk and social approval', desc: 'Price, perceived risk, scientific credibility and what peers will think.', children: ['Context'] }
          ]
        },
        {
          type: 'case', company: 'Google', year: '2013–2015', title: 'Google Glass: a breakthrough that failed the adoption test',
          situation: `In 2012 Google unveiled Glass, a head-mounted computer with a small display and a camera, with a dramatic skydiving demonstration at its developer conference. It was a genuinely new-to-the-world product category for consumers.`,
          decision: `Rather than a full launch, Google released a <b>Glass Explorer Edition</b> in 2013 for about $1,500, first to selected developers and enthusiasts and later to the wider US public — in effect a public beta test with innovators. The product was heavily publicised before a clear everyday use or target customer had been defined.`,
          outcome: `Early users praised the technology, but the camera raised privacy fears; some bars, cinemas and other venues banned the device, and wearers were mocked with the nickname "Glassholes". In January 2015 Google ended the Explorer programme and stopped selling Glass to consumers. It relaunched Glass as an <b>Enterprise Edition</b> for workers such as factory and logistics staff in 2017, where hands-free information had clear value, and finally discontinued it in 2023.`,
          lesson: `Adoption depends on more than technical advantage. Glass scored badly on compatibility with social norms, social approval, price and a clear relative advantage for everyday consumers; it fitted far better in a business segment with a defined job to do. Screen the target segment and use case at the concept stage, not after a public launch. For innovation strategy beyond the launch, see <a href="#/lesson/innovation-1">Innovation 1</a>.`
        },
        {
          type: 'interactive', widget: 'idea-score', title: 'Run a screening gate', note: 'Score two new-product ideas on market need, advantage, feasibility and fit. Decide which one earns concept testing — and write down what evidence would change your mind.'
        }
      ],
      terms: [
        { term: 'Stage-gate process', def: 'A new-product process split into stages separated by go/kill decision points where management commits more money only if the evidence is strong enough.' },
        { term: 'Concept test', def: 'Presenting a described or visualised product idea to target buyers to measure appeal and purchase intent before building it.' },
        { term: 'Conjoint analysis', def: 'A research method that infers how much customers value each attribute and level by observing the trade-offs they make between product profiles.' },
        { term: 'Test market', def: 'Launching in a limited area or simulated setting to measure trial, repeat and the effect of the marketing plan before full launch.' },
        { term: 'Commercialisation', def: 'The full launch decision: when, where, to whom and how.' },
        { term: 'Diffusion of innovation', def: 'How a new idea spreads through a population over time, from innovators to laggards.' },
        { term: 'Early adopters', def: 'Opinion leaders who adopt new ideas early but carefully, and influence the mainstream.' }
      ],
      quiz: [
        { q: 'At which stage would you use conjoint analysis?', options: ['Idea generation', 'Commercialisation', 'Concept development and testing', 'Follow-up'], answer: 2, explain: 'Conjoint helps refine the concept by showing which combinations of attributes and price buyers prefer, before building the product.' },
        { q: '2,000,000 households × 50% aware × 50% available × 10% trial. If 40% of triers repeat 5 times, how many year-1 units (1 unit per trial)?', options: ['300,000', '50,000', '150,000', '100,000'], answer: 2, explain: 'Triers = 2,000,000 × 0.5 × 0.5 × 0.1 = 50,000. Each trier buys 1 + 0.4 × 5 = 3 units on average, so units = 50,000 × 3 = 150,000.' },
        { q: 'Which group is most useful to target first to influence the mainstream?', options: ['Laggards', 'Early adopters', 'Late majority', 'Innovators only'], answer: 1, explain: 'Early adopters are respected opinion leaders whom the early majority watch for proof.' },
        { q: 'A product is hard to try in small amounts. Which adoption factor is weak?', options: ['Communicability', 'Compatibility', 'Relative advantage', 'Divisibility'], answer: 3, explain: 'Divisibility (trialability) is the ability to try an innovation on a limited basis. Free trials and samples fix it.' },
        { q: 'Which adoption factors most held back Google Glass with everyday consumers?', options: ['Divisibility and communicability', 'Compatibility with social norms, social approval and unclear relative advantage', 'Too little publicity before launch', 'A price that was too low to signal quality'], answer: 1, explain: 'Privacy fears and social stigma made Glass incompatible with everyday norms, and most consumers saw no clear advantage for the price; it found a better fit with business users who had a defined use.' },
      ],
      challenge: {
        title: 'Launch nationally or test first?',
        prompt: `Your team has a new ready-to-drink protein coffee. Target: <b>10,000,000 households</b>. Year-1 plan: <b>50% awareness</b>, <b>60% availability</b>, <b>15% trial</b> among aware households that can find it, <b>40% of triers repeat</b>, buying <b>4 more times</b> in the year. Each purchase is one multipack at a contribution of <b>$2</b>. Launch marketing (media, sampling, listing fees) costs <b>$3.0 million</b>.<br><br>(a) Forecast year-1 units and contribution after launch costs. (b) What trial rate would make year 1 break even? (c) Recommend: national launch, test market, or kill?`,
        hints: ['First compute households that are aware and can find it.', 'Contribution per trier = $2 × (1 + repeat rate × repeat purchases).', 'Ask which assumption is least certain and how a test would reduce that uncertainty.'],
        model: `<p><b>(a) Forecast</b></p><ul><li>Aware and available: 10,000,000 × 0.5 × 0.6 = <b>3,000,000</b> households</li><li>Triers: 3,000,000 × 15% = <b>450,000</b></li><li>Repeat units: 450,000 × 40% × 4 = <b>720,000</b></li><li>Total units: 450,000 + 720,000 = <b>1,170,000</b>; contribution = $2.34m</li><li>After $3.0m launch cost: <b>−$0.66m</b> in year 1</li></ul><p><b>(b) Break-even trial</b></p><ul><li>Contribution per trier = $2 × (1 + 0.4 × 4) = $2 × 2.6 = <b>$5.20</b></li><li>Triers needed = $3.0m ÷ $5.20 ≈ 576,900</li><li>Trial rate needed = 576,900 ÷ 3,000,000 ≈ <b>19.2%</b> (vs 15% planned)</li></ul><p><b>(c) Recommendation:</b> a year-1 loss is normal for a launch if repeat buyers keep buying in year 2 (180,000 repeaters at 5+ purchases would add $1.8m a year with much lower marketing). The decisive unknown is the <b>repeat rate</b>, not trial. Run a <b>simulated or two-city test market</b> for 3–4 months to measure trial and, above all, repeat. Go national if repeat is at or above 40%; reformulate or reposition if trial is high but repeat is weak; kill if both are weak.</p>`
      },
      takeaways: [
        'Most new products fail for avoidable reasons: weak advantage, poor positioning, thin launch support.',
        'A stage-gate flow commits money in steps and forces go/kill decisions on evidence.',
        'Forecast with trial and repeat; repeat is what makes a launch profitable.',
        'Adoption speeds up with clear advantage, compatibility, simplicity, trialability and visibility.'
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: 'mm-comms-5',
      title: 'Tapping global markets: the marketing decisions',
      level: 'Intermediate',
      minutes: 14,
      hook: `A product that wins at home can fail abroad not because it is worse, but because the price, the message or the menu does not translate.`,
      eli5: `Imagine your family's famous recipe wins every school fair. Now you are asked to sell it in a town where people do not eat one of your ingredients, speak another language and shop at different times. You can sell the exact same recipe, tweak it, or invent a new one for them. You can sell it yourself, or let a local baker make it under your name. Global marketing is deciding what to keep the same, what to change, and who should do the selling.`,
      blocks: [
        {
          type: 'flow', title: 'Five decisions in going abroad', when: 'Country risk, CAGE distance and entry modes in depth are in Global 4; this lesson focuses on the marketing programme.',
          steps: [
            { label: 'Should we go abroad at all?', kind: 'decision', desc: 'Reasons to go: saturated home market, global customers, scale economies, following or pre-empting rivals. Reasons to wait: weak home position, no management bandwidth, high risk.', branches: [ { label: 'Yes', to: 'Choose markets' }, { label: 'Not yet', to: 'Strengthen home position' } ] },
            { label: 'Which markets?', desc: 'Rank by size, growth, cost of doing business, competition, and psychic and geographic distance. Few markets entered deeply usually beats many entered thinly.' },
            { label: 'How to enter?', desc: 'From indirect export through to direct investment, trading off commitment, control, risk and profit potential.' },
            { label: 'What programme?', desc: 'Decide for each of product, communications, price and distribution what to standardise and what to adapt.' },
            { label: 'How to organise?', desc: 'Export department, international division, then a global organisation that plans and manages worldwide.' }
          ]
        },
        {
          type: 'pyramid', title: 'Entry modes: commitment, control and risk rise as you go up',
          levels: [
            { label: 'Direct investment', note: 'Highest control, risk and commitment', desc: 'Own factories, stores or subsidiaries. Full control of the brand and customer, lower local costs, but exposed to political and currency risk.' },
            { label: 'Joint venture', desc: 'Share ownership with a local partner who brings market knowledge, relationships or licences. Disputes over control and strategy are common.' },
            { label: 'Licensing & franchising', desc: 'Sell the right to use your brand, patents or system for fees. Low investment, but less control and you may create a future competitor.' },
            { label: 'Direct export', desc: 'Your own export team, sales branch or distributors abroad. More control and margin than indirect export.' },
            { label: 'Indirect export', note: 'Lowest commitment', desc: 'Sell through home-country intermediaries (export houses, trading companies). Little investment, little learning.' }
          ]
        },
        {
          type: 'matrix', name: 'Product and communication strategies abroad', xLabel: 'Product: same → adapted', yLabel: 'Communications: same ↓ adapted ↑',
          cells: [
            { label: 'Communication adaptation', desc: 'Same product, different message: a bicycle sold as leisure in one country and as transport in another.' },
            { label: 'Dual adaptation', desc: 'Change both product and message for the local market — highest cost, best fit.' },
            { label: 'Straight extension', desc: 'Same product, same message. Cheapest; works where needs and culture are similar. Product invention (a brand-new product for the market) sits outside this grid.' },
            { label: 'Product adaptation', desc: 'Modify the product (voltage, sizes, ingredients, regulation) but keep the brand message.' }
          ]
        },
        {
          type: 'compare', title: 'Standardise or adapt? Element by element', headers: ['Element', 'Standardise when…', 'Adapt when…'],
          rows: [
            ['Product', 'Needs and usage are universal (software, luxury, industrial)', 'Taste, religion, climate, regulation or income differ'],
            ['Brand & message', 'The core idea is universal and assets travel', 'Language, humour, symbols or values differ; local rules on claims'],
            ['Price', 'Customers can easily compare across borders', 'Costs, tariffs, income and competition differ; watch price escalation'],
            ['Distribution', 'Global retail or e-commerce partners exist', 'Retail is fragmented, informal or dominated by local players']
          ]
        },
        {
          type: 'callout', kind: 'warning', title: 'Global pricing traps: escalation and grey markets',
          html: `<ul><li><b>Price escalation</b>: freight, insurance, tariffs, importer and retailer margins and taxes stack up, so a product can cost two or three times its home price abroad. Fixes: local assembly, a simpler local version, shorter channels.</li><li><b>Grey markets</b>: when prices differ a lot between countries, dealers buy where it is cheap and resell where it is dear, undercutting authorised channels. Fixes: narrower price gaps, warranties valid only in the country of sale, policing distributors.</li><li><b>Transfer pricing and dumping</b>: prices between your own subsidiaries and below-cost export pricing attract tax and trade scrutiny (see <a href="#/lesson/global-6">Global 6</a>).</li></ul><p>For entry modes, CAGE distance and country risk in depth, see <a href="#/lesson/global-4">Global 4</a>.</p>`
        },
        {
          type: 'map', title: 'Country-of-origin effects', center: 'Made in…',
          branches: [
            { label: 'Category halo', desc: 'Some countries carry strong associations for certain categories: Swiss watches, German engineering, Japanese electronics, Italian fashion.', children: ['Quality signal'] },
            { label: 'Changing images', desc: 'Images move over time: Japanese and Korean brands went from "cheap" to premium; Indian and Chinese brands are on the same path in many categories.', children: ['Upgrading'] },
            { label: 'Home bias', desc: 'Many consumers prefer domestic brands, especially under political tension or "buy local" campaigns.', children: ['Patriotism'] },
            { label: 'Brand vs made-in', desc: 'Where a brand is from often matters more to buyers than where it is assembled.', children: ['Brand origin'] },
            { label: 'Managing it', desc: 'Lead with origin where it helps, play down where it hurts, and earn credibility with local proof and partners.', children: ['Emphasise', 'Neutralise'] }
          ]
        },
        {
          type: 'case', company: "McDonald's", year: '1996–today', title: 'India: a global system with a local menu',
          situation: `McDonald's opened its first Indian restaurant in New Delhi in 1996. Its global menu was built on beef burgers, but most Hindus do not eat beef, many Muslims avoid pork, and a large share of Indians are vegetarian.`,
          decision: `McDonald's kept its global system — brand, service model, cleanliness and supply-chain standards — but adapted the product: no beef or pork, vegetarian items such as the McAloo Tikki burger, the chicken Maharaja Mac in place of the Big Mac, separate preparation for vegetarian and non-vegetarian food, and spicier flavours. It entered through local partners in the west and south and in the north and east rather than owning restaurants directly; a long, public dispute with the northern partner was settled in 2019.`,
          outcome: `McDonald's became one of India's largest quick-service restaurant brands, with value-priced menus aimed at young families and students.`,
          lesson: `Standardise what makes the brand trustworthy (system, quality, experience), adapt what touches culture (product, price points). Partner entry brings local knowledge but also partner risk.`
        },
        {
          type: 'scenario',
          prompt: `A European premium cookware brand is entering India. Its pans sell at a price that, after duties and margins, would be roughly double the European price. Distributors suggest dropping two-thirds of the range and selling only the most expensive items to a small elite. What do you do?`,
          options: [
            { text: 'Follow the distributors: a small elite will pay anything.', feedback: 'A tiny niche may not cover the cost of entry, and very high prices create a grey-market opportunity for imports bought cheaply abroad.', good: false },
            { text: 'Launch a focused range of Indian-relevant items (for example sizes and shapes for local cooking), explore local manufacturing or assembly to cut escalation, and sell through premium online and modern retail.', feedback: 'Right. Product adaptation plus a cost fix to price escalation lets you reach the large upper-middle class rather than only the elite.', good: true },
            { text: 'Price exactly as in Europe and absorb all duties to look affordable.', feedback: 'You would sell at a loss on every pan and still invite grey-market flows out of India if prices fall below neighbouring markets.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Straight extension', def: 'Selling the same product with the same communications in a foreign market.' },
        { term: 'Dual adaptation', def: 'Changing both the product and the communications for a foreign market.' },
        { term: 'Product invention', def: 'Creating a new product specifically for a foreign market, or reviving an older design that suits it.' },
        { term: 'Price escalation', def: 'The build-up of extra costs — freight, tariffs, middlemen margins, taxes — that makes an exported product far more expensive abroad.' },
        { term: 'Grey market', def: 'Branded goods diverted from authorised channels in a low-price market and resold in a higher-price one.' },
        { term: 'Country-of-origin effect', def: 'How beliefs about a country influence how people judge products and brands from it.' }
      ],
      quiz: [
        { q: 'Which entry mode gives the most control but the highest risk?', options: ['Indirect export', 'Licensing', 'Direct investment', 'Direct export'], answer: 2, explain: 'Owning operations abroad maximises control and profit potential but exposes the firm to political, currency and market risk.' },
        { q: 'Same product, different advertising message in a new country. Which strategy is this?', options: ['Communication adaptation', 'Straight extension', 'Dual adaptation', 'Product invention'], answer: 0, explain: 'The product stays the same; only the communications change.' },
        { q: 'A product leaves the factory at $100. Freight and insurance add 10%, a 20% tariff applies on that landed cost, and the importer adds 15%. What does the importer charge?', options: ['$145.00', '$151.80', '$138.00', '$132.00'], answer: 1, explain: '$100 × 1.10 = $110; × 1.20 = $132; × 1.15 = $151.80 — before any retailer margin or local tax.' },
        { q: 'Which is the best fix for a grey-market problem caused by a large price gap between two neighbouring countries?', options: ['Raise the price in the expensive country', 'Stop selling in the cheap country immediately', 'Ignore it — it is still your product being sold', 'Narrow the price gap and make warranties valid only in the country of sale'], answer: 3, explain: 'Grey markets exist because of arbitrage; shrinking the gap and differentiating service removes the incentive.' },
        { q: 'Which element did McDonald\'s mainly standardise in India?', options: ['The beef-based menu', 'The operating system and quality standards', 'Prices identical to the US', 'The Big Mac name'], answer: 1, explain: 'It kept the system and standards that define trust in the brand, while adapting the menu and price points to local culture.' }
      ],
      challenge: {
        title: 'Export price escalation and the entry decision',
        prompt: `A mid-sized appliance maker sells an air purifier at an ex-factory price of <b>$100</b>. To export to Country X: freight and insurance add <b>10%</b>; an import tariff of <b>20%</b> applies to that landed cost; the importer adds <b>15%</b>; the retailer adds <b>40%</b> on its cost; and consumption tax is <b>10%</b> on the retail price. Local rivals sell comparable purifiers at about <b>$170</b>.<br><br>(a) Calculate the shelf price. (b) Estimate the shelf price if the firm assembled locally (no tariff, freight halved to 5%, but local assembly adds $8 per unit to cost), selling through the same channel. (c) Recommend an entry mode and programme.`,
        hints: ['Apply each step to the previous total, in order.', 'In (b), start from $100 + $8 and apply 5% freight, then the margins and tax.', 'Think about which entry mode lets you assemble locally without building a full factory.'],
        model: `<p><b>(a) Export shelf price</b></p><ul><li>Landed: $100 × 1.10 = $110</li><li>After tariff: $110 × 1.20 = $132</li><li>Importer: $132 × 1.15 = $151.80</li><li>Retailer: $151.80 × 1.40 = $212.52</li><li>Tax: $212.52 × 1.10 = <b>$233.77</b> — about 2.3 times ex-factory and well above local rivals at $170.</li></ul><p><b>(b) Local assembly</b></p><ul><li>Cost: $108 × 1.05 = $113.40</li><li>Importer/assembler partner: $113.40 × 1.15 = $130.41</li><li>Retailer: $130.41 × 1.40 = $182.57</li><li>Tax: $182.57 × 1.10 = <b>$200.83</b></li></ul><p>Still above $170, so a <b>shorter channel</b> is also needed: selling online or direct to large retailers and skipping the importer margin gives $113.40 × 1.40 × 1.10 = <b>$174.64</b>, within reach of a modest premium.</p><p><b>(c) Recommendation:</b> do not straight-export. Enter through a <b>contract-assembly or joint-venture arrangement</b> with a local partner to avoid the tariff, sell through e-commerce and a few large retail chains, and use <b>product adaptation</b> (filters suited to local pollution, local plug and app language) with a message that stresses the foreign engineering origin as a quality cue — a country-of-origin effect working in your favour. Revisit direct investment only once volume justifies it.</p>`
      },
      takeaways: [
        'Decide whether, where, how, with what programme and with what organisation — in that order.',
        'Entry modes trade commitment and risk for control and learning.',
        'Standardise what builds trust; adapt what touches culture, regulation and price points.',
        'Watch price escalation and grey markets whenever prices differ across borders.'
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: 'mm-comms-6',
      title: 'The holistic marketing organisation and socially responsible marketing',
      level: 'Advanced',
      minutes: 16,
      hook: `Marketing is too important to be left to the marketing department — the whole company delivers the promise, and society now judges the promise too.`,
      eli5: `A football team does not win because the strikers are brilliant if the defence, the coach and the groundsmen do not pull together. In a company, the marketing team makes promises, but the factory, delivery drivers, finance team and customer service keep or break them. A holistic marketing organisation gets everyone playing for the customer. And just as fans expect a club to behave well in its town, customers expect companies to be responsible to people and the planet.`,
      blocks: [
        {
          type: 'map', title: 'Trends reshaping marketing practice', center: 'Marketing in 2026',
          branches: [
            { label: 'AI everywhere', desc: 'Generative content, AI shopping assistants and agents that research and buy on the customer\'s behalf.', children: ['Agents', 'GEO'] },
            { label: 'Privacy-first data', desc: 'Fewer third-party cookies and tighter laws push firms to build first-party data and consent.', children: ['First-party data'] },
            { label: 'Retail and commerce media', desc: 'Ad budgets shift toward retailers and platforms near the point of purchase.', children: ['Closed loops'] },
            { label: 'Creator economy', desc: 'Influence moves from brands and media to individual people.', children: ['Trust'] },
            { label: 'Accountability', desc: 'CFOs expect incrementality, MMM and experiments, not activity reports.', children: ['ROI'] },
            { label: 'Responsibility', desc: 'Scrutiny of sustainability claims, data use and social impact.', children: ['Greenwashing rules'] },
            { label: 'Fragmented attention', desc: 'More channels, shorter attention, more need for distinctive brand assets.', children: ['Distinctiveness'] }
          ]
        },
        {
          type: 'compare', title: 'Organising the marketing department', headers: ['Structure', 'How it is organised', 'Best for', 'Watch out for'],
          rows: [
            ['Functional', 'Specialists: advertising, research, digital, product marketing', 'Few products, few markets', 'No one owns a product or market end to end'],
            ['Geographic', 'Country, region or territory managers', 'Markets that differ a lot locally', 'Duplication; weak global brand consistency'],
            ['Product / brand', 'Brand managers run each product as a mini-business', 'Many distinct products (consumer goods)', 'Brand managers with responsibility but little authority; internal competition'],
            ['Market / customer', 'Managers per customer segment or industry', 'Different customer groups buy similar products', 'Product expertise spread thin'],
            ['Matrix', 'Product and market managers share authority', 'Large firms with many products and many markets', 'Slow decisions and unclear accountability']
          ]
        },
        {
          type: 'cycle', title: 'The internal marketing loop', center: 'Inside-out promise',
          steps: [
            { label: 'Hire for fit', desc: 'Recruit people whose values match the brand promise, especially in customer-facing roles.' },
            { label: 'Explain the brand', desc: 'Make sure every employee knows what the brand stands for and how their job delivers it.' },
            { label: 'Equip & empower', desc: 'Give front-line staff tools, information and authority to fix customer problems.' },
            { label: 'Deliver the experience', desc: 'Engaged staff deliver the experience the advertising promised.' },
            { label: 'Customer loyalty', desc: 'Kept promises create repeat purchase and word of mouth.' },
            { label: 'Recognise & reinvest', desc: 'Share results, celebrate behaviours that delight customers, and reinvest in people.' }
          ]
        },
        {
          type: 'map', title: 'Marketing and the other departments: where friction starts', center: 'Customer-focused company',
          branches: [
            { label: 'R&D', desc: 'Marketing wants customer-led features; R&D wants technical excellence. Fix: joint teams and shared customer research.', children: ['Shared roadmaps'] },
            { label: 'Operations & manufacturing', desc: 'Marketing wants variety and speed; operations wants long runs and stable forecasts.', children: ['S&OP'] },
            { label: 'Purchasing', desc: 'Marketing wants quality inputs; purchasing wants low cost.', children: ['Total cost'] },
            { label: 'Finance & accounting', desc: 'Marketing wants budget for long-term brand building; finance wants proof of return.', children: ['ROI evidence'] },
            { label: 'Sales', desc: 'Sales wants leads and discounts now; marketing wants brand consistency and better-qualified pipeline.', children: ['Shared targets'] },
            { label: 'Customer service', desc: 'Service sees promises broken first; marketing must listen.', children: ['Voice of customer'] }
          ]
        },
        {
          type: 'pyramid', title: 'How deep does responsibility go? (illustrative ladder)',
          levels: [
            { label: 'Purpose in the business model', note: 'Apex', desc: 'The company makes money by solving a social or environmental problem; responsibility is the product, not an add-on.' },
            { label: 'Sustainable offering and supply chain', desc: 'Products, packaging and suppliers redesigned to reduce harm across the life cycle.' },
            { label: 'Cause-related and social marketing', desc: 'Campaigns linking the brand to a cause, or changing behaviour for social good.' },
            { label: 'Ethical marketing practice', desc: 'Honest claims, fair pricing, respect for privacy, no exploitation of vulnerable groups.' },
            { label: 'Legal compliance', note: 'Base', desc: 'Following advertising, consumer protection, data and environmental claims law.' }
          ]
        },
        {
          type: 'compare', title: 'CSR, cause-related marketing and social marketing', headers: ['', 'Corporate social responsibility', 'Cause-related marketing', 'Social marketing'],
          rows: [
            ['Goal', 'Run the whole firm responsibly', 'Link a brand to a cause to build both', 'Change a behaviour for the public good'],
            ['Typical form', 'Policies, reporting, community investment', 'Donation per purchase, co-branded campaign', 'Campaigns for hand-washing, road safety, quitting smoking'],
            ['Who leads', 'Board and executive team', 'Brand team with a partner charity', 'Governments, NGOs, sometimes brands'],
            ['Risk', 'Gap between report and reality', 'Looks opportunistic if the fit is weak', 'Behaviour change is slow and hard to measure'],
            ['Go deeper', '<a href="#/lesson/ethics-2">Ethics 2</a> and <a href="#/lesson/esg-1">ESG 1</a>', '<a href="#/lesson/esg-6">ESG 6</a> on when responsibility creates value', 'This lesson']
          ]
        },
        {
          type: 'case', company: 'American Express', year: '2010–today', title: 'Small Business Saturday: a cause that grows the core business',
          situation: `After the financial crisis, small independent shops in the US were struggling, and holiday shopping attention went to big chains on Black Friday and to online retailers on Cyber Monday. American Express wanted more small merchants to accept its cards.`,
          decision: `In 2010 Amex created "Small Business Saturday" on the Saturday after Thanksgiving, between those two days. It encouraged people to "shop small", offered cardmembers who registered a statement credit for shopping at small businesses, gave merchants free marketing materials and online ads, and rallied local groups to organise events.`,
          outcome: `The day spread quickly: the US Senate passed a resolution supporting it in 2011, the US Small Business Administration became a co-sponsor, and it became an annual fixture with wide participation by shoppers, merchants and local officials.`,
          lesson: `The strongest cause marketing is a genuine fit: helping small merchants is good for communities and directly grows Amex's merchant network and card use. The brand built a platform, not a one-off donation.`
        },
        {
          type: 'case', company: 'Unilever (Lifebuoy)', year: '2000s–today', title: 'Social marketing for hand-washing with soap',
          situation: `Diarrhoea and pneumonia were leading killers of young children in many low-income countries, and public-health research showed that hand-washing with soap at key moments could cut these infections substantially — yet the habit was rare.`,
          decision: `Unilever's Lifebuoy soap brand ran large behaviour-change programmes in schools and communities in countries including India, teaching children to wash at key moments, and was a founding partner of Global Handwashing Day, first held on 15 October 2008. Its emotional "Help a Child Reach 5" film (2013) told the story of a village in India.`,
          outcome: `The programmes reached many millions of people and became a widely cited example of brand-led social marketing. Critics note the obvious commercial benefit to a soap brand, which is also why the programme was sustained for so long.`,
          lesson: `Social marketing works best when the behaviour, the brand and the business model point the same way — but be transparent that you benefit, and measure behaviour change, not just reach.`
        },
        {
          type: 'scenario',
          prompt: `A snack brand's agency proposes a campaign donating to an ocean-cleanup charity for every pack sold. The brand's packs are multi-layer plastic that is hard to recycle. What do you advise?`,
          options: [
            { text: 'Launch it — any donation is good PR.', feedback: 'The fit is poor and invites accusations of greenwashing: you would be funding cleanup of the very waste your product creates.', good: false },
            { text: 'First commit to a credible packaging plan, then link any cause campaign to that progress — or pick a cause that genuinely fits the brand.', feedback: 'Right. Fix the core first. Cause marketing amplifies what the business already does; it cannot replace it.', good: true },
            { text: 'Avoid all cause marketing; it is always cynical.', feedback: 'Too strong. Well-fitted cause marketing can create value for society and the brand, as Small Business Saturday shows.', good: false }
          ]
        }
      ],
      terms: [
        { term: 'Holistic marketing', def: 'Treating marketing as the whole company\'s job — internal, integrated, relationship and socially responsible marketing together.' },
        { term: 'Internal marketing', def: 'Hiring, training and motivating employees so they can and want to deliver the brand promise.' },
        { term: 'Brand / product management', def: 'An organisation in which managers run individual brands or products as businesses, coordinating all functions.' },
        { term: 'Matrix organisation', def: 'A structure where product and market managers share authority over decisions and resources.' },
        { term: 'Cause-related marketing', def: 'Linking a brand\'s marketing to a charitable cause, often with a donation tied to purchases.' },
        { term: 'Social marketing', def: 'Using marketing techniques to change behaviour for individual or social good rather than to sell a product.' }
      ],
      quiz: [
        { q: 'A consumer-goods company with 40 distinct brands most likely uses which structure?', options: ['Functional', 'Product / brand management', 'Geographic only', 'No structure'], answer: 1, explain: 'With many distinct brands, brand managers running each one as a mini-business is the classic choice.' },
        { q: 'Which is the main weakness of a matrix organisation?', options: ['Too little specialisation', 'No geographic focus', 'Slow decisions and unclear accountability', 'It cannot handle many products'], answer: 2, explain: 'Shared authority between product and market managers can slow decisions and blur who is responsible.' },
        { q: 'What makes Small Business Saturday a strong cause campaign?', options: ['It was very cheap', 'It used celebrities', 'It was a one-off event', 'The cause genuinely fits and grows Amex\'s merchant network'], answer: 3, explain: 'Strong fit between cause and core business makes the effort credible and sustainable.' },
        { q: 'A government campaign to get people to wear seatbelts is an example of:', options: ['Social marketing', 'Cause-related marketing', 'Internal marketing', 'Trade promotion'], answer: 0, explain: 'Social marketing uses marketing tools to change behaviour for the public good.' },
        { q: 'A brand promises "fast, friendly service" but front-line staff are untrained and have no authority to fix problems. What is missing?', options: ['More advertising', 'Internal marketing', 'A lower price', 'A matrix structure'], answer: 1, explain: 'Internal marketing equips and motivates employees to keep the promise the advertising made.' }
      ],
      challenge: {
        title: 'Is this cause campaign worth it?',
        prompt: `A breakfast-cereal brand sells <b>2,000,000 packs</b> a quarter at a contribution of <b>$1.50</b> per pack. It proposes a three-month campaign donating <b>$0.10 per pack</b> to a children's nutrition charity, supported by <b>$150,000</b> of communications. Research suggests sales will rise <b>8%</b> during the campaign.<br><br>(a) What is the short-term profit impact? (b) What would make the campaign worth running anyway, and how would you restructure it? (c) How would you measure success?`,
        hints: ['Donations are paid on all packs sold, including the extra ones.', 'Compare incremental contribution with donation plus communications.', 'Think about fit, duration and what else the brand gains.'],
        model: `<p><b>(a) Short-term maths</b></p><ul><li>Incremental packs: 2,000,000 × 8% = 160,000; contribution = 160,000 × $1.50 = <b>$240,000</b></li><li>Donation: 2,160,000 × $0.10 = <b>$216,000</b></li><li>Communications: $150,000</li><li>Net short-term impact = $240,000 − $216,000 − $150,000 = <b>−$126,000</b></li></ul><p><b>(b) Why it might still be worth it, and how to fix it</b></p><ul><li>The fit is strong: a cereal brand and children's nutrition. If it builds lasting brand preference and retail support, the value lies beyond the quarter.</li><li>Restructure: a <b>fixed, multi-year commitment</b> (for example $200,000 a year) rather than a per-pack amount, which reads as more sincere and is easier to budget; involve employees as volunteers; link to a product change such as lower sugar so the cause is lived, not just funded.</li><li>Be transparent about the amounts to avoid any suggestion of exploiting the cause.</li></ul><p><b>(c) Measurement:</b> brand-lift on trust and liking among parents, repeat-purchase rate of new buyers versus a control region, retailer feature support, and the charity's own outcome measures (meals or programmes funded). <b>Recommendation:</b> run it as a long-term platform with a fixed commitment and a product improvement, not as a quarterly sales promotion.</p>`
      },
      takeaways: [
        'The whole company keeps or breaks the marketing promise; internal marketing makes it possible.',
        'Choose a structure that matches products and markets, and fix its known weak spot.',
        'Responsibility is a ladder: compliance and ethics first, then sustainability, then purpose.',
        'Cause and social marketing work when the cause genuinely fits the business, and the business is transparent about benefiting.'
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: 'mm-comms-7',
      title: 'Marketing implementation, control, the marketing audit and the future',
      level: 'Advanced',
      minutes: 16,
      hook: `A brilliant marketing plan that nobody checks is a wish; control is how marketing earns the right to its budget year after year.`,
      eli5: `When you plan a long cycle ride you set a target ("50 km by lunch"), check the map and your speed along the way, figure out why you are behind (a hill? a flat tyre?) and change something. Every so often you also ask a bigger question: is this even the right route? Marketing control is the same: set goals, check progress, find causes, correct course — and every few years, a full check-up called a marketing audit to ask whether the whole plan still makes sense.`,
      blocks: [
        {
          type: 'cycle', title: 'The annual-plan control loop', center: 'Hit the plan',
          steps: [
            { label: 'Set goals', desc: 'Monthly or quarterly targets for sales, share, margin, and customer measures.' },
            { label: 'Measure performance', desc: 'Sales analysis, market-share analysis, marketing-expense-to-sales ratios, customer satisfaction and brand health.' },
            { label: 'Diagnose gaps', desc: 'Separate price from volume effects, find which regions, products or channels drive the gap.' },
            { label: 'Take corrective action', desc: 'Change targeting, pricing, spend, sales effort — or the goals themselves if the market has moved.' }
          ]
        },
        {
          type: 'pyramid', title: 'The four types of marketing control',
          levels: [
            { label: 'Strategic control', note: 'Top management and auditors', desc: 'Is the firm pursuing the best opportunities in markets, products and channels? Tools: marketing audit, marketing excellence review, social responsibility review.' },
            { label: 'Efficiency control', note: 'Line and staff management, marketing controller', desc: 'Is spending effective? Sales force, advertising, promotion and distribution efficiency.' },
            { label: 'Profitability control', note: 'Marketing controller', desc: 'Where is the firm making and losing money — by product, territory, customer, segment, channel and order size?' },
            { label: 'Annual-plan control', note: 'Top and middle management', desc: 'Is the firm hitting its planned sales, share and margin? Tools: sales, share and expense analysis, financial analysis, customer scorecards.' }
          ]
        },
        {
          type: 'formula', name: 'Marketing profitability by channel or segment',
          expr: 'Channel contribution = Revenue − Cost of goods − Costs directly caused by serving that channel',
          explain: `Assign only costs the channel actually causes (trade promotions, sales force time, fulfilment, returns, platform fees). Shared overheads are left out, because dropping a channel would not remove them.`,
          example: `Illustrative e-commerce channel: revenue $2.5m − COGS $1.375m − ads $0.45m − fulfilment $0.375m − returns $0.15m = $0.15m contribution, a 6% margin, versus 17% in stores. The question is not "drop it?" but "which cost line can we fix?"`
        },
        {
          type: 'framework', name: 'The marketing audit', by: 'Standard strategic-control tool', when: 'Every few years, or when results disappoint and nobody can say why. It should be comprehensive, systematic, independent and periodic.',
          steps: [
            { label: 'Environment audit', desc: 'Macro trends (demographic, economic, technology, political, cultural, natural) and the task environment (markets, customers, competitors, channels, suppliers, publics).' },
            { label: 'Strategy audit', desc: 'Is the mission clear and market-oriented? Are objectives and the positioning right for today\'s market?' },
            { label: 'Organisation audit', desc: 'Structure, efficiency of the marketing function, and how well it works with sales, R&D, operations and finance.' },
            { label: 'Systems audit', desc: 'Marketing information, planning, control and new-product development systems.' },
            { label: 'Productivity audit', desc: 'Profitability analysis by product, customer and channel; cost-effectiveness of each activity.' },
            { label: 'Function audits', desc: 'Product, price, distribution, communications, sales force, digital and customer experience, one by one.' }
          ]
        },
        {
          type: 'compare', title: 'Marketing excellence review: where are we?', headers: ['Dimension', 'Poor', 'Good', 'Excellent'],
          rows: [
            ['Orientation', 'Product-driven', 'Market-driven', 'Market-driving: shapes customer needs'],
            ['Segments', 'Mass market', 'Segment-oriented', 'Niche- and customer-oriented'],
            ['Value', 'Price-driven', 'Quality-driven', 'Value-driven'],
            ['Partners', 'Suppliers and distributors as adversaries', 'Supported', 'Treated as partners'],
            ['Customers', 'Transactions', 'Retention', 'Lifetime relationships and advocacy'],
            ['Evidence', 'Activity reports', 'Attribution dashboards', 'Experiments and calibrated mix models']
          ]
        },
        {
          type: 'map', title: 'The future of marketing: what to prepare for', center: 'Next decade',
          branches: [
            { label: 'Agentic commerce', desc: 'AI agents that compare and buy for customers mean brands must be legible to machines: clear data, reviews, pricing and availability.', children: ['Machine-readable'] },
            { label: 'Answer engines', desc: 'Discovery shifts from search results to AI answers; being cited matters (see Marketing 4).', children: ['GEO'] },
            { label: 'Measurement renaissance', desc: 'Incrementality testing and open-source mix models become standard; finance and marketing share one view of return.', children: ['MMM', 'Experiments'] },
            { label: 'Personalisation with consent', desc: 'First-party data, value exchange and privacy as a brand promise.', children: ['Trust'] },
            { label: 'Brand as a moat', desc: 'When AI makes content and features cheap to copy, distinctive brands and communities are harder to copy.', children: ['Distinctiveness'] },
            { label: 'Responsible growth', desc: 'Stricter green-claim and AI-disclosure rules; sustainability built into products, not slogans.', children: ['Claims law'] }
          ]
        },
        {
          type: 'case', company: 'Procter & Gamble', year: '2017–2018', title: 'Auditing digital advertising — and cutting it',
          situation: `By the mid-2010s P&G, one of the world's biggest advertisers, was spending heavily on digital media, where ad fraud, bot traffic, ads that were never actually viewable and unsafe placements were widespread and measurement was controlled by the platforms themselves.`,
          decision: `In January 2017 chief brand officer Marc Pritchard publicly challenged the industry, demanding common viewability standards, third-party verification of measurement and transparent agency contracts. P&G reviewed its digital spend and cut ads it judged wasteful — a reported $200 million or so in 2017 — and moved money to where it could verify reach.`,
          outcome: `P&G said its reach did not suffer and in fact improved, and other big advertisers followed with similar demands. Platforms expanded third-party verification, and "media transparency" became a standard agenda item for marketing leaders.`,
          lesson: `Efficiency control means asking for proof of what you buy. A big budget gives leverage to demand better measurement — and cutting waste can free money for activity that works.`
        },
        {
          type: 'checklist', title: 'Your annual marketing control routine',
          items: [
            'Monthly: sales, share and marketing-expense-to-sales against plan, with price and volume separated',
            'Quarterly: contribution by product, channel and customer segment',
            'Quarterly: brand health tracking and customer satisfaction or NPS',
            'Twice a year: at least one incrementality test on a major channel',
            'Yearly: efficiency review of sales force, advertising, promotion and distribution',
            'Every 2–3 years: an independent marketing audit and excellence review',
            'Yearly: a responsibility review of claims, data use and social impact'
          ]
        }
      ],
      terms: [
        { term: 'Annual-plan control', def: 'Checking whether planned sales, share and margin goals are being achieved, and correcting course.' },
        { term: 'Profitability control', def: 'Measuring the profit of products, territories, customers, segments and channels.' },
        { term: 'Efficiency control', def: 'Evaluating and improving the effectiveness of marketing spending and activities.' },
        { term: 'Strategic control', def: 'Checking whether the firm\'s basic marketing strategy fits its environment and opportunities.' },
        { term: 'Marketing audit', def: 'A comprehensive, systematic, independent and periodic review of a firm\'s marketing environment, objectives, strategies and activities.' },
        { term: 'Marketing-expense-to-sales ratio', def: 'Marketing spend divided by sales, tracked over time to see whether the firm is overspending to hit targets.' }
      ],
      quiz: [
        { q: 'Who typically owns profitability control?', options: ['The marketing controller', 'Only the CEO', 'Advertising agencies', 'External auditors only'], answer: 0, explain: 'A marketing controller analyses profit by product, channel and customer, working with finance.' },
        { q: 'A marketing audit should be comprehensive, systematic, periodic and…', options: ['Secret', 'Run by the marketing VP alone', 'Independent', 'Annual by law'], answer: 2, explain: 'Independence matters: self-audits miss blind spots, so audits are often done by an outside or separate team.' },
        { q: 'A channel has revenue of $1.5m, COGS $0.825m, platform fees and ads $0.3m and fulfilment $0.12m. What is its contribution?', options: ['$0.375m', '$0.675m', '$0.120m', '$0.255m'], answer: 3, explain: '$1.5m − $0.825m − $0.3m − $0.12m = $0.255m, or 17% of revenue.' },
        { q: 'Which question belongs to strategic control?', options: ['Did we hit this month\'s sales target?', 'Are we pursuing the best market opportunities?', 'Which salesperson made the most calls?', 'What was our CPM last week?'], answer: 1, explain: 'Strategic control asks whether the overall strategy still fits the market.' },
        { q: 'On the marketing excellence review, a "market-driving" orientation means:', options: ['Shaping customer needs and the market itself', 'Following competitors closely', 'Selling only to the mass market', 'Cutting prices to win share'], answer: 0, explain: 'Excellent firms do not just respond to markets; they shape what customers come to expect.' }
      ],
      challenge: {
        title: 'Profitability control across three channels',
        prompt: `A personal-care brand reports (in $ thousands) for the year:<br><br><b>Retail stores</b>: revenue 6,000; COGS 3,600; trade promotions 600; sales force 500; logistics 300.<br><b>Own e-commerce</b>: revenue 2,500; COGS 1,375; digital ads 450; fulfilment 375; returns 150.<br><b>Quick commerce apps</b>: revenue 1,500; COGS 825; platform fees and ads 300; fulfilment 120.<br><br>Shared corporate overheads are 900. Total sales were 8% below plan, mainly in retail.<br><br>(a) Calculate contribution and margin by channel. (b) The CEO suggests closing e-commerce. Respond. (c) What control actions would you take?`,
        hints: ['Contribution excludes shared overheads.', 'Ask what happens to the 900 of overheads if e-commerce closes.', 'Look for the cost line that makes e-commerce weak, and what the channel gives besides profit.'],
        model: `<p><b>(a) Contribution by channel</b></p><ul><li>Retail: 6,000 − 3,600 − 600 − 500 − 300 = <b>1,000</b> (16.7%)</li><li>E-commerce: 2,500 − 1,375 − 450 − 375 − 150 = <b>150</b> (6.0%)</li><li>Quick commerce: 1,500 − 825 − 300 − 120 = <b>255</b> (17.0%)</li><li>Total contribution 1,405 − overheads 900 = <b>505</b> operating profit</li></ul><p><b>(b) Closing e-commerce</b> removes 150 of contribution but none of the 900 overheads, so profit would fall from 505 to <b>355</b>. E-commerce also produces first-party customer data and a direct relationship the other channels do not. Do not close it.</p><p><b>(c) Control actions</b></p><ul><li><b>Efficiency control on e-commerce:</b> returns (6% of revenue) and ads (18% of revenue) are the weak lines. Test ad incrementality with a holdout; cut non-incremental brand-keyword spend; tackle returns with better product information and sizing. Bringing ads to 14% and returns to 4% adds about 150, doubling contribution.</li><li><b>Annual-plan control on retail:</b> split the 8% shortfall into price, volume and mix by region; check whether trade promotions (10% of revenue) are buying incremental volume.</li><li><b>Profitability control going forward:</b> report contribution by channel and customer quarterly, not just revenue.</li><li><b>Strategic question for the next audit:</b> quick commerce has the best margin and is growing; should budget shift there?</li></ul>`
      },
      takeaways: [
        'Four levels of control: annual plan, profitability, efficiency and strategic.',
        'Judge channels and segments on contribution, not after-overhead profit.',
        'Run an independent marketing audit every few years; it asks whether the plan itself is right.',
        'The future rewards brands that are distinctive, measurable, trusted with data and genuinely responsible.'
      ]
    }
  ]
});

MBA.addCases([
  {
    id: 'case-mm-samsung-note7',
    company: 'Samsung Electronics',
    industry: 'Consumer electronics',
    year: '2016',
    track: 'mm-comms',
    title: 'Exploding phones: how far do you go with the recall?',
    situation: `<p>In August 2016 Samsung launched the <b>Galaxy Note 7</b>, its flagship large-screen phone, to strong reviews and early demand, weeks ahead of Apple's next iPhone. Within days, reports and videos appeared of Note 7 phones overheating and catching fire.</p>
<p>On 2 September Samsung announced a global recall of the phones sold so far — roughly 2.5 million — and began offering replacements with batteries from a different supplier. Within weeks, some <b>replacement phones also caught fire</b>, including one on a plane before take-off in the US. Aviation regulators were warning passengers, carriers were pausing sales, and the story was everywhere.</p>
<p>The cause was not yet fully understood. The Note line was one of Samsung's most important and profitable, and its next flagship, the Galaxy S8, was months away.</p>`,
    question: 'It is October 2016. You lead Samsung\'s mobile business. What do you do with the Note 7 and how do you communicate?',
    options: [
      { text: 'Keep selling the replacement phones, call the new incidents isolated, and run advertising to reassure buyers.', result: 'Further fires would destroy trust in the whole Samsung brand, regulators might force action anyway, and the company would look as if it put sales above safety.' },
      { text: 'Pause sales again and issue a second software update limiting battery charge, keeping the product alive while investigating.', result: 'It buys time but leaves dangerous phones in circulation and repeats the message that Samsung is not sure what is wrong; carriers and regulators are losing patience.' },
      { text: 'Permanently stop production and sales, recall every Note 7 worldwide, make returns easy, investigate openly with outside experts, and report findings and new safety processes before the next launch.', result: 'A very large financial hit and a lost product, but it removes the danger, caps the reputational damage to one model and sets up a credible comeback.', best: true },
      { text: 'Quietly discontinue the Note 7 without public explanation and focus all communication on the upcoming S8.', result: 'Silence would be read as evasion; the unanswered question "why did it catch fire?" would follow the S8 launch.' }
    ],
    whatHappened: `<p>On <b>11 October 2016</b> Samsung permanently discontinued the Galaxy Note 7 and asked all owners to stop using it, offering refunds or exchanges; airlines and regulators banned the phone from flights. The decision cost Samsung several billion dollars in lost profit.</p>
<p>In <b>January 2017</b> Samsung held a press conference presenting the results of its own and independent investigations: two different battery defects from two suppliers. It announced an <b>eight-point battery safety check</b> and other process changes, and apologised. The Galaxy S8 launched in April 2017 and sold strongly, and the Note line returned with the Note 8 later that year.</p>`,
    lessons: [
      'In a safety crisis, the communication is the action: a full, visible stop says more than any advertising.',
      'A half-measure that fails (the first replacement) costs more trust than a decisive first move.',
      'Explain the cause and the fix publicly before asking customers to trust the next launch.',
      'Capping damage to one product protects the master brand and the rest of the portfolio.'
    ],
    frameworks: ['Crisis communication', 'Marketing PR', 'Brand architecture', 'Strategic control']
  },
  {
    id: 'case-mm-pepsi-live-for-now',
    company: 'PepsiCo',
    industry: 'Beverages',
    year: '2017',
    track: 'mm-comms',
    title: 'A protest-themed ad goes viral for the wrong reasons',
    situation: `<p>On <b>4 April 2017</b> Pepsi released a two-and-a-half-minute online ad, part of its "Live for Now" platform, made by its in-house content studio. In it, model <b>Kendall Jenner</b> leaves a photo shoot to join a street protest of smiling young people carrying vague signs, and ends a tense standoff by handing a police officer a can of Pepsi. The crowd cheers.</p>
<p>The ad was intended to project a global message of unity. Within hours it was being mocked and condemned online for <b>trivialising real protest movements</b>, especially Black Lives Matter demonstrations against police violence, and for echoing a widely shared 2016 photograph of a protester facing police in Baton Rouge. Bernice King, Martin Luther King Jr.'s daughter, posted a sarcastic tweet. The ad was the top trending topic across social media.</p>`,
    question: 'It is the morning after launch. You are Pepsi\'s head of marketing. What do you do?',
    options: [
      { text: 'Defend the ad: explain the positive intent and keep it running, since the attention is driving huge view counts.', result: 'Views are not value. Defending it would keep the controversy alive, deepen the impression that Pepsi does not understand the issue and risk boycott calls.' },
      { text: 'Pull the ad immediately, apologise clearly to the public and to Kendall Jenner, and review how the creative was approved.', result: 'The story dies faster, the brand shows it listens, and the internal review can fix the process that let it through.', best: true },
      { text: 'Edit out the police scene and re-release a shorter version.', result: 'A re-cut keeps the story going and looks like the brand still wants to use protest imagery; critics would dissect the new version too.' },
      { text: 'Say nothing and let the news cycle move on.', result: 'Silence while a brand is the top trending topic reads as indifference; the criticism shapes the narrative unchallenged.' }
    ],
    whatHappened: `<p>Pepsi <b>pulled the ad on 5 April 2017</b>, about a day after release. Its statement said Pepsi had been trying to project a global message of unity, peace and understanding, but "clearly we missed the mark, and we apologize", adding an apology for putting Kendall Jenner in that position.</p>
<p>The ad became one of the most cited marketing missteps of the decade. Commentators pointed to the risks of an in-house team producing culturally sensitive work without diverse, independent challenge, and to the danger of borrowing the imagery of a social movement to sell a product with no real connection to it.</p>`,
    lessons: [
      'Decoding happens in the audience\'s context: a message about "unity" can read as trivialising real pain.',
      'Purpose-flavoured advertising needs genuine fit and action behind it, or it looks like appropriation.',
      'Pre-test sensitive creative with diverse, independent audiences, not only the team that made it.',
      'When a message clearly misfires, pull it fast and apologise plainly; speed limits the damage.'
    ],
    frameworks: ['Communications process (encoding/decoding)', 'Message source and appeals', 'Crisis communication', 'Socially responsible marketing']
  }
]);
