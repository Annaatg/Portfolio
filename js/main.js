// ---------- Translations ----------
const translations = {
	en: {
		"skip-link": "Skip to main content",
		"nav-home": "Home",
		"about": "About",
		"skills": "Skills",
		"projects": "Projects",
		"experiences": "Experience",
		"work": "Contact",

		"availability": "Open to Sales &amp; Trading graduate roles, 2026-27 &middot; Open to relocation",
		"hero-title-accent": "Atignon",
		"title": "Aspiring Sales &amp; Trading Analyst",
		"hero-value-prop": "MSc Financial Engineering (90%). I test trading ideas with data and report what the numbers actually show.",
		"projects-btn": "See my projects",
		"get-in-touch": "Get in touch",
		"download-cv": "Download my CV",
		"location": "Cotonou, Benin &middot; Open to relocation",

		"hero-fact-program-label": "Program",
		"hero-fact-program-value": "MSc Financial Engineering, WorldQuant University &mdash; expected Sept 2026, 90%",
		"hero-fact-mba-label": "MBA Finance",
		"hero-fact-mba-value": "African School of Economics &mdash; GPA 3.83",
		"hero-fact-tools-label": "Tools",
		"hero-fact-tools-value": "Python &amp; R",
		"hero-fact-status-label": "Status",
		"hero-fact-status-value": "Open to Sales &amp; Trading graduate roles, 2026-27 &middot; Open to relocation",

		"read-capstone": "Read the capstone",
		"about-teaser-more": "More about me",
		"home-contact-line": "Reach me at",
		"home-contact-link": "atignonanna@gmail.com",

		"markets-label": "Markets",
		"markets-disclosure": "Delayed data, for information only",
		"markets-asof-prefix": "As of",
		"markets-last-update-prefix": "Last update:",

		"certifications-nav": "Certifications",
		"certifications-title": "Certifications",
		"certs-show-all": "Show all certifications",
		"certs-hide": "Hide",
		"certs-showing-count": "Showing {shown} of {total}",
		"certs-view-credential": "View credential",
		"cat-quant-finance": "Quantitative Finance",
		"cat-data-science-ml": "Data Science &amp; Machine Learning",
		"cat-ai-data-eng": "AI &amp; Data Engineering",
		"cat-programming-software": "Programming &amp; Software",
		"cat-professional-skills": "Professional Skills &amp; Ethics",
		"cat-competitions": "Competitions",

		"about-title": "About",
		"about-text-1": "I'm a financial engineer in the making, currently completing my MSc in Financial Engineering at WorldQuant University, with an MBA in Finance from the African School of Economics. My work sits at the intersection of markets and code — I like turning a hunch about how prices behave into something testable, then finding out whether it actually holds up.",
		"about-text-2": "That instinct is what led to my thesis: a systematic, market-neutral equity pairs trading strategy that uses machine learning for signal generation and risk management. It's the kind of project where the fun part isn't the idea — it's the part where you stress-test it and it either survives or it doesn't.",
		"about-text-3": "I work primarily in Python and R, with a solid grounding in financial econometrics, stochastic modelling, and risk management. Outside of models and backtests, I care about markets in the way some people care about puzzles — I want to know why something moved, not just that it did.",
		"about-text-4": "I'm currently looking for opportunities in Sales &amp; Trading, with a particular interest in derivatives and systematic strategies. This portfolio is where I share the projects that got me here.",
		"work-btn": "Get in touch",
		"exp-text": "MSc Financial Engineering",
		"projects-text": "Projects",
		"tech-text": "Core languages",
		"companies-text": "MBA GPA",

		"skills-title": "Skills",
		"service1-title": "Financial Engineering",
		"service1-desc": "Quantitative modeling, risk analysis and financial markets — building the analytical backbone behind sound decisions.",
		"service3-title": "Data &amp; Machine Learning",
		"service3-desc": "Time series modeling and predictive analytics — applying machine learning where markets meet data.",
		"service4-title": "Markets &amp; Trading",
		"service4-desc": "Systematic strategies across equities and FX — testing ideas until they hold up under real conditions.",
		"service2-title": "Graphic Design",
		"service2-desc": "Branding, social media posts — turning ideas into visuals that feel intentional and alive.",
		"tag-quant": "Quantitative Finance",
		"tag-risk": "Risk Analysis",
		"tag-ml": "Machine Learning",
		"tag-timeseries": "Time Series",
		"tag-pairs": "Pairs Trading",
		"tag-equities": "Equities",
		"tools-label": "Tools",
		"cat-languages-env": "Languages &amp; Environments",
		"cat-libraries": "Libraries",
		"cat-devtools": "Dev Tools",
		"cat-analysis": "Analysis",
		"excel-advanced": "Excel (Advanced)",
		"languages-label": "Languages",
		"lang-french": "French",
		"lang-english": "English",
		"lang-thai": "Thai",
		"lang-japanese": "Japanese",
		"level-advanced": "Advanced",
		"level-native": "Native",
		"level-beginner": "Beginner",

		"capstone-title": "Market-Neutral Pairs Trading with Machine Learning (Capstone Thesis)",
		"capstone-desc": "Tests whether XGBoost, LightGBM and LSTM signals can beat a classic cointegration pairs-trading strategy, on 105 US large caps over 2010-2025.",
		"capstone-detail1": "Capstone thesis for the MSc in Financial Engineering at WorldQuant University (supervised by Saad Zaman): can regime-aware machine learning improve a market-neutral pairs-trading strategy?",
		"capstone-detail2": "Built a clean daily-price dataset for 105 US large caps across 12 sectors (2010-2025) with a 95% coverage filter; ran Engle-Granger and Johansen cointegration tests on rolling windows and shortlisted 4 pairs (MA-V, ICE-V, JNJ-LLY, AXP-ICE).",
		"capstone-detail3": "Built daily features using same-day information only (with a variance-inflation check) and trained XGBoost, LightGBM and LSTM signal models, benchmarked against a static z-score cointegration rule.",
		"capstone-detail4": "Walk-forward out-of-sample backtest with transaction costs and a one-day execution delay, plus sensitivity analysis on costs (including 5 bps) and benchmark thresholds.",
		"capstone-detail5": "Findings: tree models classify well (macro-F1 0.76 and 0.75 vs 0.32 for the LSTM) but lose money when traded; mean out-of-sample Sharpe was -0.02 (benchmark), -0.31 (XGBoost), -0.38 (LightGBM), -0.41 (LSTM). High recall with low precision means over-trading, and costs erase the edge. Hypothesis rejected for this universe.",
		"capstone-detail6": "Takeaway: classification accuracy does not translate into trading profit. Limits are stated openly: only 4 pairs, a single validation split, current index constituents only.",
		"capstone-note": "Group project, 3 authors.",
		"capstone-download": "Download the notebook",
		"projects-title": "Projects",
		"projects-intro": "22 projects from the WorldQuant MScFE. Most are group projects with equal contribution across all components.",
		"featured-label": "Featured",
		"all-projects-label": "All projects",
		"filter-all": "All",
		"filter-derivatives": "Derivatives",
		"filter-portfolio": "Portfolio",
		"filter-ml": "Machine Learning",
		"filter-timeseries": "Time Series",
		"filter-risk": "Risk",
		"more-projects": "More projects",
		"show-less-projects": "Show less",
		"show-details": "Show details",
		"hide-details": "Hide details",
		"project1-title": "Yield Curve &amp; Market Risk Analysis",
		"project1-desc": "Modeling the U.S. Treasury yield curve and decomposing market risk through correlation analysis — from raw FRED data to a fitted Nelson-Siegel curve and PCA-driven factor decomposition.",
		"project1-detail1": "Yield curve modeling — pulled historical U.S. Treasury yield data via the FRED API and fitted a Nelson-Siegel curve to model the term structure at different points in time, comparing fitted curves against observed yields.",
		"project1-detail2": "Correlation &amp; dimensionality reduction — used PCA and SVD to decompose the covariance structure of Treasury-linked ETF returns, isolating the dominant factors driving yield movements and demonstrating how a small number of components explain most of the variance in rate changes.",
		"project1-detail3": "Empirical ETF analysis — applied the same PCA/SVD framework to a real estate sector ETF (XLRE) and its top 30 holdings, extracting principal components from daily return covariance to understand the sector's underlying risk factors.",
		"project1-download": "Download the notebook",
		"project2-title": "Market Prediction &amp; Credit Risk Analysis",
		"project2-desc": "Testing whether short-term technical signals predict emerging-market ETF returns, then shifting to credit risk — structuring and exploring a loan default dataset to surface the drivers of default.",
		"project2-detail1": "ETF return prediction — built a linear regression model using a 10-day simple moving average to predict next-day returns on the Chile country ETF (ECH), validated across 5-fold cross-validation. Results showed weak but consistent positive correlation between predicted and actual returns, illustrating how difficult short-horizon return prediction is even with a clean, simple setup.",
		"project2-detail2": "Credit risk data analysis — cleaned and structured a consumer credit dataset (loan amount, interest rate, borrower income, employment length, credit history length, loan status), handling missing values and categorical encoding, then explored the distributions driving default risk as groundwork for credit risk modeling.",
		"project2-download": "Download the notebook",
		"project2-download-dataset": "Download the dataset",
		"project3-title": "Financial Econometrics: Diagnosing Data Pathologies",
		"project3-desc": "A practical framework for spotting and fixing the four statistical issues that quietly break financial models — skewness, fat tails, outlier sensitivity, and non-stationarity — with diagnosis and remedies for each.",
		"project3-detail1": "Skewness — simulated and measured distributional asymmetry, and discussed its impact on risk models that assume normality.",
		"project3-detail2": "Kurtosis &amp; heteroscedasticity — examined fat-tailed distributions and time-varying volatility, both common in financial returns and both dangerous when ignored in options pricing and risk management.",
		"project3-detail3": "Outlier sensitivity — used the modified Z-score (median absolute deviation) to detect and quantify the distortion outliers introduce into means, variances, and regression coefficients.",
		"project3-detail4": "Non-stationarity &amp; unit root testing — applied the Augmented Dickey-Fuller test to detect random-walk behavior in time series, and discussed why modeling non-stationary data without differencing produces spurious, unreliable results.",
		"project3-download": "Download the notebook",
		"project4-title": "Cointegration, Non-Stationarity &amp; Multicollinearity in Financial Time Series",
		"project4-desc": "From feature engineering on time series to a full Johansen cointegration study of gold, silver, and platinum — building a VECM model and diagnosing multicollinearity across major tech stocks along the way.",
		"project4-detail1": "Feature extraction — engineered lag features, rolling statistics, and differencing on time series data to prepare it for modeling, and assessed which transformations actually preserve useful signal.",
		"project4-detail2": "Non-stationarity &amp; long-run equilibrium — tested gold, silver, and platinum prices (1985–2024) for unit roots using ADF and KPSS tests, confirmed a cointegrating relationship via the Johansen test, and built a Vector Error Correction Model (VECM) capturing the long-run equilibrium between the three metals — the same statistical foundation used in pairs trading, where cointegrated assets are traded against each other on the assumption their prices revert to equilibrium.",
		"project4-detail3": "Multicollinearity — analyzed daily returns of AAPL, MSFT, GOOGL, and AMZN, using correlation matrices and Variance Inflation Factor (VIF) to detect and quantify redundancy between highly correlated tech stocks, identifying which pairs would destabilize a regression model.",
		"project4-download": "Download the notebook",
		"project4-download-dataset": "Download the dataset",
		"project5-title": "Option Pricing: Binomial Trees &amp; Put-Call Parity",
		"project5-desc": "Pricing European and American options with the Cox-Ross-Rubinstein binomial model, then stress-testing put-call parity across moneyness levels to see where the theory breaks down for early-exercise options.",
		"project5-detail1": "Binomial tree pricing — implemented the Cox-Ross-Rubinstein (CRR) model with 100 time steps to price at-the-money European calls and puts, computing up/down factors and risk-neutral probabilities from volatility and the risk-free rate.",
		"project5-detail2": "Moneyness sensitivity — priced calls and puts across a range of strikes (deep ITM to deep OTM) to confirm option values move as theory predicts: call prices fall as strikes rise, put prices rise as strikes rise.",
		"project5-detail3": "Put-call parity testing — checked the parity relationship (C − P = S − PV(K)) across strikes for both European and American options, finding it held only at-the-money for European options and broke down elsewhere — and testing why American options systematically violate it due to early-exercise rights.",
		"project5-detail4": "Multi-step binomial trees — extended the model to a 3-step tree pricing a put option, tracing asset price evolution node by node and discounting expected payoffs back to present value.",
		"project5-download": "Download the notebook",
		"project6-title": "Exotic Option Pricing: Stochastic Volatility &amp; Jump Diffusion",
		"project6-desc": "Pricing options under the Heston and Merton models via Monte Carlo simulation, extending to American early-exercise and barrier options — where theory meets the messiness of real option pricing.",
		"project6-detail1": "Heston model (stochastic volatility) — simulated correlated stock price and variance processes via Monte Carlo (10,000 paths) to price at-the-money European calls and puts, testing sensitivity to the correlation parameter ρ between asset returns and volatility.",
		"project6-detail2": "Merton jump-diffusion model — modeled sudden price jumps (Poisson-distributed) layered on top of standard diffusion, pricing options under varying jump intensities and comparing the resulting price curves against the Heston model's smoother, volatility-driven behavior.",
		"project6-detail3": "Greeks estimation — computed Delta and Gamma numerically under both models to quantify option price sensitivity to the underlying asset.",
		"project6-detail4": "American options &amp; early exercise — priced an American call under the Heston model using Monte Carlo with Least Squares Regression (the Longstaff-Schwartz approach), confirming the early-exercise premium against the European price.",
		"project6-detail5": "Barrier options — priced Up-and-In Call and Down-and-In Put exotic options under jump-diffusion, showing how barrier conditions can significantly discount an option relative to its vanilla European equivalent.",
		"project6-download": "Download the notebook",
		"project7-title": "Calibrating Stochastic Models to Real Market Data",
		"project7-desc": "Fitting the Heston, Bates, and CIR models to real option and interest-rate data — from stochastic volatility calibration via Fourier pricing to simulating a full year of interest-rate paths.",
		"project7-detail1": "Heston model calibration — calibrated the Heston stochastic volatility model to real 15-day equity option prices using Fourier-based pricing (the Lewis/Carr-Madan approach) and global optimization (differential evolution), converting puts to synthetic calls via put-call parity and verifying the Feller condition on the fitted parameters.",
		"project7-detail2": "Bates model (Heston + jumps) — extended the calibration to 60-day options using the Bates model, which layers a jump-diffusion component on top of stochastic volatility, to test whether adding jumps improves the fit to market prices.",
		"project7-detail3": "CIR interest rate model — calibrated the Cox-Ingersoll-Ross model to the Euribor term structure (7 to 360 days), then simulated 100,000 one-year interest rate paths to estimate the expected 12-month Euribor rate and its 5th-95th percentile confidence range.",
		"project7-download": "Download the notebook",
		"project7-download-dataset": "Download the dataset",
		"project8-title": "Regime-Switching Volatility: S&amp;P 500 vs. Bitcoin",
		"project8-desc": "Detecting bull/bear volatility regimes in equities and crypto with Markov-switching models — comparing how a traditional index and a highly volatile digital asset behave across calm and turbulent periods.",
		"project8-detail1": "Time series diagnostics — analyzed S&amp;P 500 and Bitcoin daily returns (2019-2022) with rolling volatility, ACF/PACF plots, and Ljung-Box tests to characterize each series' autocorrelation structure before modeling.",
		"project8-detail2": "Markov regime-switching models — fitted two-regime Markov-switching models to both assets to identify distinct low- and high-volatility states, visualizing regime shifts against real market events (the COVID crash and subsequent bull run, the 2022 bear market).",
		"project8-detail3": "Model comparison — compared model variants with different mean and variance specifications using AIC/BIC, selecting the best-fitting specification for each asset.",
		"project8-detail4": "Regime-switching autoregression — extended the model to a Markov-switching AR(1) process on S&amp;P 500 returns, estimating smoothed regime probabilities over time to show how the probability of being in a high-volatility state evolves.",
		"project8-download": "Download the notebook",
		"project9-title": "Multi-Armed Bandits for Stock Selection: 2008 vs. 2020",
		"project9-desc": "Applying reinforcement learning (UCB and Epsilon-Greedy algorithms) to pick stocks during the 2008 financial crisis and the 2020 COVID crash — treating each stock as a bandit arm and letting the algorithm learn where to allocate.",
		"project9-detail1": "Data collection &amp; correlation structure — gathered daily returns for 30 stocks (14 financial, 15 non-financial) during the September-October 2008 crisis, and used hierarchical clustering on the correlation matrix to visualize how stocks grouped together under stress.",
		"project9-detail2": "UCB (Upper Confidence Bound) algorithm — implemented UCB from scratch to sequentially select stocks, balancing exploitation of historically strong performers against exploration of under-tested ones, using each stock's daily return as its \"reward.\"",
		"project9-detail3": "Epsilon-Greedy algorithm — implemented a second bandit strategy for comparison, choosing the best-known stock most of the time while randomly exploring alternatives a fraction of the time.",
		"project9-detail4": "Out-of-sample stress test — reran both algorithms on the same 30 stocks during the March-April 2020 COVID crash, comparing cumulative returns between UCB and Epsilon-Greedy to see which strategy adapted better to a completely different crisis.",
		"project9-download": "Download the notebook",
		"project10-title": "Machine Learning Foundations for Finance: Clustering, PCA, and Trees",
		"project10-desc": "Three core ML techniques applied to financial data — clustering assets by behavior, reducing a 20-stock portfolio to its key risk factors, and predicting returns from momentum and volatility with a regression tree.",
		"project10-detail1": "K-means clustering — implemented and visualized K-means step-by-step (centroid initialization, point assignment, centroid updates) on financial-style data with return and volatility features, illustrating how the algorithm groups similar instruments.",
		"project10-detail2": "Principal Component Analysis (PCA) — applied PCA to daily returns of 20 major stocks (AAPL, MSFT, GOOGL, TSLA, JPM, and others) to reduce the portfolio's dimensionality and identify the principal factors driving joint stock movements.",
		"project10-detail3": "Regression trees — trained a decision tree regressor to predict asset returns from momentum, volatility, and value features, using a time-aware train/test split to respect the sequential nature of financial data and evaluating performance with MSE and R-squared.",
		"project10-download": "Download the notebook",
		"project11-title": "LDA, Neural Networks &amp; SVMs for Financial Classification",
		"project11-desc": "Three classification techniques on real and financial data — using Linear Discriminant Analysis for dimensionality reduction, a neural network to predict S&amp;P 500 returns, and SVMs across synthetic financial classification and regression tasks.",
		"project11-detail1": "Linear Discriminant Analysis (LDA) — applied LDA to the classic Iris dataset for supervised dimensionality reduction, then paired it with a Random Forest classifier to evaluate classification accuracy via a confusion matrix. Extended the technique to a synthetic financial-instrument classification task.",
		"project11-detail2": "Neural networks — built a feedforward neural network (Keras/TensorFlow, with dropout regularization) to predict next-period S&amp;P 500 returns from engineered features, using a time-respecting train/test split.",
		"project11-detail3": "Support Vector Machines (SVMs) — implemented both SVC and SVR on synthetic financial data (returns, volatility, volume, momentum) for classification and regression tasks, tuning hyperparameters via grid search and cross-validation.",
		"project11-download": "Download the notebook",
		"project12-title": "Model Tuning: Hyperparameter Optimization, Bias-Variance &amp; Ensembles",
		"project12-desc": "Practical machine learning engineering for financial models — tuning a Random Forest via randomized search, diagnosing overfitting with learning curves, and comparing bagging, boosting, and stacking ensembles.",
		"project12-detail1": "Hyperparameter optimization — tuned a Random Forest regressor on synthetic financial-factor data using randomized search with 5-fold cross-validation, comparing the optimized model's test performance against a baseline.",
		"project12-detail2": "Bias-variance tradeoff — diagnosed underfitting and overfitting across four model types (regularized logistic regression, a deep decision tree, a shallow decision tree, and a Random Forest ensemble) using learning curves, visualizing how each model's training and validation accuracy diverge as more data is added.",
		"project12-detail3": "Ensemble learning — implemented and compared three ensemble strategies (bagging, boosting, and stacking) on a classification task, evaluating each with cross-validation to see which combination method generalized best.",
		"project12-download": "Download the notebook",
		"project13-title": "Deep Learning for Price Prediction: MLPs vs. GAF-CNNs",
		"project13-desc": "Comparing neural network architectures for S&amp;P 500 prediction across three data representations — testing whether converting price series into images (Gramian Angular Fields) for a CNN beats a standard neural network.",
		"project13-detail1": "Stationarity analysis — tested S&amp;P 500 price levels for stationarity via the Augmented Dickey-Fuller test, then applied fractional differencing to find the optimal balance between removing trend and preserving memory in the series (unlike simple log returns, which achieve stationarity but discard more information).",
		"project13-detail2": "MLP baseline models — trained feedforward neural networks on three representations of the same data — raw price levels, log returns, and fractionally differenced series — using lagged values as features, to test which representation is easiest for a neural network to learn from.",
		"project13-detail3": "GAF-CNN models — converted each time series into Gramian Angular Field images and trained convolutional neural networks on the resulting \"pictures\" of price dynamics, an unconventional but increasingly popular technique for financial time series.",
		"project13-detail4": "Comprehensive model comparison — benchmarked all six model/representation combinations by MSE and MAE, finding that a standard MLP trained on log returns outperformed every CNN variant, including the image-based ones — a useful reminder that architectural sophistication doesn't always beat simpler, well-chosen representations.",
		"project13-download": "Download the notebook",
		"project14-title": "LSTM Trading Strategy Across Multi-Asset ETFs",
		"project14-desc": "Building LSTM neural networks to predict and trade a five-asset ETF universe (equities, bonds, gold, oil), then backtesting the resulting strategy against a simple equal-weight buy-and-hold benchmark.",
		"project14-detail1": "Individual LSTM models — built and trained a separate LSTM model for each of five ETFs (SPY for equities, TLT and SHY for long- and short-duration bonds, GLD for gold, DBO for oil), predicting next-period returns from historical price sequences.",
		"project14-detail2": "Strategy construction &amp; backtesting — converted model predictions into trading signals and backtested the resulting LSTM-based strategy against an equal-weight buy-and-hold benchmark, evaluating performance through cumulative returns, drawdowns, and return distributions.",
		"project14-detail3": "Multi-output LSTM model — extended the approach to a single multi-output LSTM predicting all five ETFs jointly, testing whether modeling cross-asset relationships in one network improves on training independent models per asset.",
		"project14-download": "Download the notebook",
		"project15-title": "Data Leakage &amp; Walk-Forward Backtesting of Deep Learning Trading Models",
		"project15-desc": "Shows how data leakage inflates the apparent performance of MLP, LSTM and CNN-GAF models on SPY, then re-tests them with leak-free walk-forward backtesting.",
		"project15-detail1": "Built a 5-day-ahead direction classifier on 2,000 days of SPY returns (10 lagged returns as features, chronological 70/30 split).",
		"project15-detail2": "Leakage demonstration: labels built from a global return quantile and features normalized on the full sample; coded a check counting training samples whose labels overlap the test period.",
		"project15-detail3": "Implemented an MLP, an LSTM (NumPy, gates and BPTT) and a CNN on Gramian Angular Field images of return windows.",
		"project15-detail4": "Strategy backtest with long/short signals, 5-day non-overlapping trades and 5 bps costs; metrics: total/annualized return, volatility, Sharpe, max drawdown, hit rate versus buy-and-hold. On the leaky setup the MLP and CNN lost money while buy-and-hold had a Sharpe of 1.31.",
		"project15-detail5": "Walk-forward validation (500/500 and 500/100 windows) with scaling and labels computed inside each fold; retrained MLP and CNN-GAF in PyTorch per fold. Leak-free accuracy of about 59-60% mostly reflected majority-class prediction (class-1 recall of 1-3%).",
		"project15-detail6": "Takeaway: headline accuracy hides weak predictive power; only leak-free walk-forward tests with trading metrics give an honest picture.",
		"project15-download": "Download the notebook",
		"project16-title": "Mean-Variance Portfolio Optimization, Factor Analysis &amp; Monte Carlo",
		"project16-desc": "Builds and tests constrained mean-variance portfolios on 10 US equities, then runs a Fama-French 5-factor regression and checks the optimizer against Monte Carlo simulation.",
		"project16-detail1": "Downloaded two years of weekly prices (July 2023 - June 2025) for 10 large-cap US stocks across tech, banks, pharma, energy and retail.",
		"project16-detail2": "Solved the Global Minimum Variance and Maximum Sharpe portfolios with SciPy (SLSQP, no short-selling); the Max Sharpe portfolio reached about 41.7% annualized return at 19% volatility (in-sample Sharpe of about 2.04).",
		"project16-detail3": "Added a 15% maximum weight per asset and plotted the efficient frontier with and without the cap.",
		"project16-detail4": "Out-of-sample test (July-September 2025) against a benchmark, reporting total return, Sharpe, max drawdown and win rate. Both portfolios beat the benchmark (18.8% and 16.4% vs 12.6%); the constrained portfolio had the better Sharpe ratio (5.75 vs 5.61) with lower volatility.",
		"project16-detail5": "Fama-French 5-factor regression (OLS and robust Huber) of the portfolio's excess returns: positive significant alpha, no significant factor exposure, low explanatory power (R² of about 0.09).",
		"project16-detail6": "Monte Carlo validation: an optimizer class comparing SLSQP with 50,000 random-portfolio simulations, with and without a weight cap. Variance matched within 0.15%, converging to within 0.04% at 100,000 simulations.",
		"project16-download": "Download the notebook",
		"project17-title": "Portfolio Strategies: MVO vs 1/N, Black-Litterman &amp; Kelly Criterion",
		"project17-desc": "Compares portfolio construction methods on US equities: constrained mean-variance optimization, a 5,000-run simulation against equal weighting, Black-Litterman with investor views, and Kelly-criterion sizing.",
		"project17-detail1": "Optimized a 7-stock portfolio (AAPL, NVDA, TSLA, XOM, REGN, LLY, JPM) on weekly data for July 2023 - June 2025, comparing long-only, long-only with a 20% cap, and unconstrained short-selling; the 20% cap gave the best Sharpe ratio (0.131 weekly vs 0.099 and 0.098).",
		"project17-detail2": "Simulated 5,000 random 5-stock portfolios from a 20-stock universe (2-year estimation, 1-year out-of-sample test). Equal weighting beat minimum-variance optimization on average (14.0% vs 11.6%, statistically significant by paired t-test); the optimized portfolio won in down markets (75% win rate) and lost in bull markets, behaving as a defensive strategy.",
		"project17-detail3": "Black-Litterman: equilibrium returns from market-cap weights and a risk-aversion estimate, blended with 7 investor views (including relative views NVDA vs AAPL and REGN vs LLY) to get posterior returns and weights, compared with a market-weighted portfolio in and out of sample.",
		"project17-detail4": "Kelly criterion: implemented full, half and double Kelly sizing, measuring Sharpe, volatility and drawdowns on train and test periods, and showing how leverage amplifies risk without improving the Sharpe ratio.",
		"project17-download": "Download the notebook",
		"project18-title": "Robust Portfolio Construction: Denoising, HRP &amp; Purged Cross-Validation",
		"project18-desc": "Tests 8 portfolio-construction strategies on 10 US equities, combining covariance denoising, Hierarchical Risk Parity and Combinatorial Purged Cross-Validation (CPCV) to reduce overfitting.",
		"project18-detail1": "Implemented from scratch covariance denoising, Hierarchical Risk Parity (hierarchical clustering of assets) and Combinatorial Purged Cross-Validation (many train/test combinations with purging and embargo to prevent leakage), on 10 US equities (Jan 2024 - Jun 2025).",
		"project18-detail2": "Built 8 strategies combining these methods, with a 15%-capped Maximum Sharpe portfolio as baseline, and compared annual return, volatility, Sharpe, max drawdown, CVaR and weight stability.",
		"project18-detail3": "Key findings: MSRP with CPCV ranked first (Sharpe 0.61 vs 0.25 for the baseline); HRP alone had the lowest drawdown (-14% vs -22%); denoising added little on its own; combining all three methods did not help.",
		"project18-detail4": "Out-of-sample check on July 2025, a month not used to build either portfolio: the baseline did slightly better (Sharpe 8.1 vs 7.0), reported as it came out.",
		"project18-detail5": "Discussed the prediction vs. interpretation trade-off between simple explainable portfolios and more complex, better-validated ones.",
		"project18-download": "Download the notebook",
		"project19-title": "Oil Price Drivers: Data Pipeline, Cleaning &amp; Causal Network",
		"project19-desc": "Builds a multi-source data pipeline for oil-price risk factors, with a three-stage cleaning process, exploratory analysis and a Bayesian-network diagram of the drivers.",
		"project19-detail1": "Collected oil price (WTI), S&amp;P 500, USD index, VIX, energy-sector ETFs, US GDP, industrial production and CPI from Yahoo Finance and FRED, and merged them into one time-series dataset.",
		"project19-detail2": "Three-stage cleaning: winsorized extreme outliers at 4 standard deviations; removed duplicate timestamps, impossible negative values and jumps above 5 standard deviations; imputed missing values by variable type (fill-forward for market prices, time-based interpolation for macro series).",
		"project19-detail3": "Exploratory analysis: distributions, time series, correlation heatmap, scatter matrix and scatter plots against the oil price.",
		"project19-detail4": "Drew a Bayesian-network diagram of the main oil-price drivers (supply, USD, VIX) and their effect on energy equities (XLE, XOP, USO), as a base for later risk modelling.",
		"project19-download": "Download the notebook",
		"project20-title": "Oil Market Regimes: Hidden Markov Model on WTI Crude",
		"project20-desc": "Detects bull, bear and stagnant regimes in WTI crude oil returns with a 3-state Gaussian Hidden Markov Model, and explores Bayesian-network structure learning.",
		"project20-detail1": "Downloaded WTI crude futures history (from August 2000) with yfinance and computed daily log-returns.",
		"project20-detail2": "Fitted a 3-state Gaussian Hidden Markov Model (full covariance) on the returns, ordering states by mean return to read them as bear, stagnant and bull regimes.",
		"project20-detail3": "Overlaid the regimes on the price history, plotted each regime's return distribution and the transition matrix to show how persistent each regime is.",
		"project20-detail4": "Used hill-climbing structure learning (pgmpy) to learn dependencies between the regime and macro variables; this step uses simulated placeholder variables and demonstrates the method only, not an empirical finding.",
		"project20-download": "Download the notebook",
		"project21-title": "Forecasting Oil Price Regimes: HMM Discretization &amp; Bayesian Networks",
		"project21-desc": "Builds a leakage-aware pipeline to forecast next-month oil-price regimes, combining HMM state discretization of 13 market and macro variables with a Bayesian network learned by hill-climbing search.",
		"project21-detail1": "Assembled monthly data from 2000 to 2026 on oil, equities, the USD, the VIX, energy ETFs and US macro series (Yahoo Finance, FRED), with a chronological 80/10/10 train/validation/test split.",
		"project21-detail2": "Trained a 3-state Hidden Markov Model for each of the 13 variables to turn them into bear, stagnant and bull regimes, with the state labelling derived from the training set only.",
		"project21-detail3": "Defined an expert-drafted causal graph and refined it with hill-climbing structure search (maximum 3 parents per node), comparing K2, BIC and BDeu scoring on a one-step-ahead forecast target.",
		"project21-detail4": "Added a guardrail that flags implausibly good validation scores; the final near-perfect accuracy triggered it and is treated as a likely data-leakage artifact, not a real result. The trading simulation showed no gain over buy-and-hold, consistent with that reading.",
		"project21-detail5": "Takeaway: a model that looks perfect usually has a leak, so the next step is to decode regimes causally and re-test.",
		"project21-download": "Download the notebook",

		"experiences-title": "Experience",
		"education-title": "Education",
		"education1": "Master's of Science in Financial Engineering",
		"education1-desc": "Specialization in Quantitative Finance.",
		"education2": "Master's in Business Administration",
		"education2-desc": "Specialization in Finance.",
		"education3": "Bachelor's in Accounting, Finance &amp; Auditing",
		"education3-desc": "Specialization in Finance.",
		"education4": "Graphic Design Training",
		"education4-desc": "Specialization in visual design.",
		"work-title": "Work experience",
		"work1": "Founder &amp; CEO",
		"work1-period": "2023–Present",
		"work1-desc": "Founded and operate a consumer lifestyle brand end-to-end, owning financial planning, supplier sourcing, and customer acquisition.",
		"work2": "Communications Assistant",
		"work2-desc": "Coordination of student communications, social media and events.",
		"work3": "Audit &amp; Accounting Intern",
		"work3-desc": "Bank reconciliation, audits, invoice and document processing.",
		"work4": "Summer Intern",
		"work4-desc": "Supported consulting engagements at a West African advisory firm, contributing to research and client deliverables.",
		"work5": "Graphic Designer",
		"work5-desc": "Managed multiple concurrent client briefs, translating requirements into precise, brand-aligned deliverables.",

		"contact-title": "Contact",
		"contact-email-label": "Email",
		"contact-address-label": "Address",
		"contact-cta-text": "The fastest way to reach me is by email — I read and reply to every message.",
		"email-me": "Email me",

		"footer-tagline": "Aspiring Sales &amp; Trading Analyst &mdash; MSc Financial Engineering.",
		"footer-quick-links": "Quick links",
		"footer-contact": "Contact",
		"copyright": "© 2026 Anne-Marie Atignon. All rights reserved.",
		"last-updated-label": "Last updated: {{LAST_UPDATED_EN}}",

		"404-code": "404",
		"404-title": "This page didn't survive the backtest.",
		"404-body": "I can't find what you were looking for — the link may be out of date. Here's the way back.",
		"404-home-link": "Back to home",
		"404-projects-link": "See my projects"
	},
	fr: {
		"skip-link": "Aller au contenu principal",
		"nav-home": "Accueil",
		"about": "À propos",
		"skills": "Compétences",
		"projects": "Projets",
		"experiences": "Expériences",
		"work": "Contact",

		"availability": "Ouverte aux postes Sales &amp; Trading (promotion 2026-27) &middot; Ouverte à la mobilité géographique",
		"hero-title-accent": "Atignon",
		"title": "Aspirante Analyste Sales &amp; Trading",
		"hero-value-prop": "Master en Ingénierie Financière (90 %). Je teste des idées de trading avec des données et je rapporte ce que les chiffres montrent réellement.",
		"projects-btn": "Voir mes projets",
		"get-in-touch": "Me contacter",
		"download-cv": "Télécharger mon CV",
		"location": "Cotonou, Bénin &middot; Ouverte à la mobilité géographique",

		"hero-fact-program-label": "Formation",
		"hero-fact-program-value": "Master en Ingénierie Financière, WorldQuant University &mdash; obtention prévue en septembre 2026, 90 %",
		"hero-fact-mba-label": "MBA Finance",
		"hero-fact-mba-value": "African School of Economics &mdash; Moyenne 3,83",
		"hero-fact-tools-label": "Outils",
		"hero-fact-tools-value": "Python &amp; R",
		"hero-fact-status-label": "Statut",
		"hero-fact-status-value": "Ouverte aux postes Sales &amp; Trading (promotion 2026-27) &middot; Ouverte à la mobilité géographique",

		"read-capstone": "Lire le mémoire",
		"about-teaser-more": "En savoir plus sur moi",
		"home-contact-line": "Me joindre à",
		"home-contact-link": "atignonanna@gmail.com",

		"markets-label": "Marchés",
		"markets-disclosure": "Données différées, à titre informatif",
		"markets-asof-prefix": "À la date du",
		"markets-last-update-prefix": "Dernière mise à jour :",

		"certifications-nav": "Certifications",
		"certifications-title": "Certifications",
		"certs-show-all": "Voir toutes les certifications",
		"certs-hide": "Masquer",
		"certs-showing-count": "Affichage de {shown} sur {total}",
		"certs-view-credential": "Voir le justificatif",
		"cat-quant-finance": "Finance Quantitative",
		"cat-data-science-ml": "Science des données &amp; Machine Learning",
		"cat-ai-data-eng": "IA &amp; Ingénierie des données",
		"cat-programming-software": "Programmation &amp; Logiciels",
		"cat-professional-skills": "Compétences professionnelles &amp; Éthique",
		"cat-competitions": "Compétitions",

		"about-title": "À propos",
		"about-text-1": "Je suis ingénieure financière en devenir, actuellement en train de terminer mon Master of Science en Ingénierie Financière à la WorldQuant University, avec un MBA en Finance de l'African School of Economics. Mon travail se situe à l'intersection des marchés et du code — j'aime transformer une intuition sur le comportement des prix en quelque chose de testable, puis découvrir si elle tient réellement la route.",
		"about-text-2": "C'est cet instinct qui a mené à mon mémoire : une stratégie systématique et neutre au marché de pairs trading sur actions, utilisant le machine learning pour la génération de signaux et la gestion des risques. C'est le genre de projet où la partie amusante n'est pas l'idée — c'est le moment où on la met à l'épreuve, et où elle survit ou non.",
		"about-text-3": "Je travaille principalement avec Python et R, avec une solide base en économétrie financière, en modélisation stochastique et en gestion des risques. En dehors des modèles et des backtests, je m'intéresse aux marchés comme d'autres s'intéressent aux énigmes — je veux savoir pourquoi quelque chose a bougé, pas seulement que ça a bougé.",
		"about-text-4": "Je suis actuellement à la recherche d'opportunités en Sales &amp; Trading, avec un intérêt particulier pour les produits dérivés et les stratégies systématiques. Ce portfolio rassemble les projets qui m'ont menée jusqu'ici.",
		"work-btn": "Me contacter",
		"exp-text": "Master en Ingénierie Financière",
		"projects-text": "Projets",
		"tech-text": "Langages principaux",
		"companies-text": "Moyenne MBA",

		"skills-title": "Compétences",
		"service1-title": "Ingénierie Financière",
		"service1-desc": "Modélisation quantitative, analyse de risques et marchés financiers — construire l'ossature analytique derrière des décisions solides.",
		"service3-title": "Données &amp; Machine Learning",
		"service3-desc": "Modélisation de séries temporelles et analyse prédictive — appliquer le machine learning là où les marchés rencontrent les données.",
		"service4-title": "Marchés &amp; Trading",
		"service4-desc": "Stratégies systématiques sur les actions et le FX — tester des idées jusqu'à ce qu'elles tiennent dans des conditions réelles.",
		"service2-title": "Design Graphique",
		"service2-desc": "Branding, publications pour les réseaux sociaux — transformer des idées en visuels qui semblent intentionnels et vivants.",
		"tag-quant": "Finance Quantitative",
		"tag-risk": "Analyse de Risques",
		"tag-ml": "Machine Learning",
		"tag-timeseries": "Séries Temporelles",
		"tag-pairs": "Pairs Trading",
		"tag-equities": "Actions",
		"tools-label": "Outils",
		"cat-languages-env": "Langages &amp; Environnements",
		"cat-libraries": "Bibliothèques",
		"cat-devtools": "Outils de développement",
		"cat-analysis": "Analyse",
		"excel-advanced": "Excel (Avancé)",
		"languages-label": "Langues",
		"lang-french": "Français",
		"lang-english": "Anglais",
		"lang-thai": "Thaï",
		"lang-japanese": "Japonais",
		"level-advanced": "Avancé",
		"level-native": "Langue maternelle",
		"level-beginner": "Débutant",

		"capstone-title": "Pairs trading market-neutral avec machine learning (mémoire de fin d'études)",
		"capstone-desc": "Teste si des signaux XGBoost, LightGBM et LSTM peuvent battre une stratégie classique de pairs trading par cointégration, sur 105 grandes capitalisations américaines entre 2010 et 2025.",
		"capstone-detail1": "Mémoire de fin d'études pour le MSc en Ingénierie Financière de WorldQuant University (encadré par Saad Zaman) : le machine learning sensible aux régimes peut-il améliorer une stratégie de pairs trading market-neutral ?",
		"capstone-detail2": "Construction d'un jeu de données propre de prix journaliers pour 105 grandes capitalisations américaines réparties sur 12 secteurs (2010-2025) avec un filtre de couverture de 95 % ; tests de cointégration d'Engle-Granger et de Johansen sur fenêtres glissantes, avec sélection de 4 paires (MA-V, ICE-V, JNJ-LLY, AXP-ICE).",
		"capstone-detail3": "Construction de variables journalières utilisant uniquement l'information du jour même (avec un contrôle du facteur d'inflation de la variance) et entraînement de modèles de signal XGBoost, LightGBM et LSTM, comparés à une règle statique de cointégration par z-score.",
		"capstone-detail4": "Backtest walk-forward hors échantillon avec coûts de transaction et un délai d'exécution d'un jour, ainsi qu'une analyse de sensibilité aux coûts (y compris 5 points de base) et aux seuils de référence.",
		"capstone-detail5": "Résultats : les modèles d'arbres classifient bien (F1 macro de 0,76 et 0,75 contre 0,32 pour le LSTM) mais perdent de l'argent une fois tradés ; le Sharpe moyen hors échantillon était de -0,02 (référence), -0,31 (XGBoost), -0,38 (LightGBM), -0,41 (LSTM). Un rappel élevé avec une faible précision signifie un sur-trading, et les coûts effacent l'avantage. Hypothèse rejetée pour cet univers.",
		"capstone-detail6": "Enseignement : la précision de classification ne se traduit pas en profit de trading. Les limites sont assumées ouvertement : seulement 4 paires, une seule séparation de validation, uniquement les composants actuels de l'indice.",
		"capstone-note": "Projet de groupe, 3 auteurs.",
		"capstone-download": "Télécharger le notebook",
		"projects-title": "Projets",
		"projects-intro": "22 projets réalisés dans le cadre du MScFE de WorldQuant University. La plupart sont des projets de groupe avec une contribution égale sur l'ensemble des volets.",
		"featured-label": "À la une",
		"all-projects-label": "Tous les projets",
		"filter-all": "Tous",
		"filter-derivatives": "Produits dérivés",
		"filter-portfolio": "Portefeuille",
		"filter-ml": "Machine Learning",
		"filter-timeseries": "Séries temporelles",
		"filter-risk": "Risque",
		"more-projects": "Plus de projets",
		"show-less-projects": "Voir moins",
		"show-details": "Voir les détails",
		"hide-details": "Masquer les détails",
		"project1-title": "Analyse de la courbe des taux et du risque de marché",
		"project1-desc": "Modélisation de la courbe des taux du Trésor américain et décomposition du risque de marché par analyse de corrélation — des données brutes de la FRED à une courbe de Nelson-Siegel ajustée et une décomposition factorielle par ACP.",
		"project1-detail1": "Modélisation de la courbe des taux — récupération des données historiques des taux du Trésor américain via l'API FRED et ajustement d'une courbe de Nelson-Siegel pour modéliser la structure par terme à différents moments, en comparant les courbes ajustées aux rendements observés.",
		"project1-detail2": "Corrélation et réduction de dimensionnalité — utilisation de l'ACP (PCA) et de la SVD pour décomposer la structure de covariance des rendements d'ETF liés au Trésor, isolant les facteurs dominants des mouvements de taux et démontrant comment un petit nombre de composantes explique l'essentiel de la variance des variations de taux.",
		"project1-detail3": "Analyse empirique d'ETF — application du même cadre ACP/SVD à un ETF du secteur immobilier (XLRE) et à ses 30 principales positions, extrayant les composantes principales de la covariance des rendements journaliers pour comprendre les facteurs de risque sous-jacents du secteur.",
		"project1-download": "Télécharger le notebook",
		"project2-title": "Prédiction de marché et analyse du risque de crédit",
		"project2-desc": "Tester si des signaux techniques à court terme permettent de prédire les rendements d'un ETF de marché émergent, puis basculer vers le risque de crédit — structurer et explorer un jeu de données de défauts de prêt pour en dégager les facteurs déterminants.",
		"project2-detail1": "Prédiction des rendements d'ETF — construction d'un modèle de régression linéaire utilisant une moyenne mobile simple sur 10 jours pour prédire le rendement du lendemain sur l'ETF pays du Chili (ECH), validé par validation croisée à 5 plis. Les résultats montrent une corrélation positive faible mais constante entre les rendements prédits et observés, illustrant la difficulté de la prédiction de rendement à court horizon même avec un dispositif simple et propre.",
		"project2-detail2": "Analyse de données de risque de crédit — nettoyage et structuration d'un jeu de données de crédit à la consommation (montant du prêt, taux d'intérêt, revenu de l'emprunteur, ancienneté professionnelle, durée de l'historique de crédit, statut du prêt), traitement des valeurs manquantes et de l'encodage des variables catégorielles, puis exploration des distributions à l'origine du risque de défaut, en préparation d'une modélisation du risque de crédit.",
		"project2-download": "Télécharger le notebook",
		"project2-download-dataset": "Télécharger le jeu de données",
		"project3-title": "Économétrie financière : diagnostiquer les pathologies des données",
		"project3-desc": "Un cadre pratique pour repérer et corriger les quatre problèmes statistiques qui faussent discrètement les modèles financiers — asymétrie, queues épaisses, sensibilité aux valeurs aberrantes et non-stationnarité — avec un diagnostic et une solution pour chacun.",
		"project3-detail1": "Asymétrie (skewness) — simulation et mesure de l'asymétrie de la distribution, et discussion de son impact sur les modèles de risque supposant la normalité.",
		"project3-detail2": "Kurtosis et hétéroscédasticité — étude des distributions à queues épaisses et de la volatilité variable dans le temps, deux phénomènes fréquents dans les rendements financiers et dangereux lorsqu'ils sont ignorés dans la tarification des options et la gestion des risques.",
		"project3-detail3": "Sensibilité aux valeurs aberrantes — utilisation du Z-score modifié (écart absolu médian) pour détecter et quantifier la distorsion que les valeurs aberrantes introduisent dans les moyennes, les variances et les coefficients de régression.",
		"project3-detail4": "Non-stationnarité et test de racine unitaire — application du test de Dickey-Fuller augmenté pour détecter un comportement de marche aléatoire dans les séries temporelles, et discussion sur les raisons pour lesquelles modéliser des données non stationnaires sans différenciation produit des résultats fallacieux et peu fiables.",
		"project3-download": "Télécharger le notebook",
		"project4-title": "Cointégration, non-stationnarité et multicolinéarité dans les séries temporelles financières",
		"project4-desc": "De l'ingénierie de variables sur des séries temporelles à une étude complète de cointégration de Johansen sur l'or, l'argent et le platine — construction d'un modèle VECM et diagnostic de multicolinéarité sur les principales valeurs technologiques au passage.",
		"project4-detail1": "Extraction de variables — création de variables retardées, de statistiques glissantes et de différenciations sur les séries temporelles pour les préparer à la modélisation, et évaluation des transformations qui préservent réellement un signal utile.",
		"project4-detail2": "Non-stationnarité et équilibre de long terme — tests de racine unitaire (ADF et KPSS) sur les prix de l'or, de l'argent et du platine (1985–2024), confirmation d'une relation de cointégration via le test de Johansen, et construction d'un modèle à correction d'erreur vectoriel (VECM) capturant l'équilibre de long terme entre les trois métaux — le même fondement statistique utilisé en pairs trading, où des actifs cointégrés sont tradés l'un contre l'autre sur l'hypothèse que leurs prix reviennent à l'équilibre.",
		"project4-detail3": "Multicolinéarité — analyse des rendements journaliers d'AAPL, MSFT, GOOGL et AMZN, à l'aide de matrices de corrélation et du facteur d'inflation de la variance (VIF) pour détecter et quantifier la redondance entre valeurs technologiques fortement corrélées, en identifiant les paires qui déstabiliseraient un modèle de régression.",
		"project4-download": "Télécharger le notebook",
		"project4-download-dataset": "Télécharger le jeu de données",
		"project5-title": "Valorisation d'options : arbres binomiaux et parité call-put",
		"project5-desc": "Valorisation d'options européennes et américaines avec le modèle binomial de Cox-Ross-Rubinstein, puis test de résistance de la parité call-put à travers différents niveaux de moneyness pour voir où la théorie échoue pour les options à exercice anticipé.",
		"project5-detail1": "Valorisation par arbre binomial — implémentation du modèle Cox-Ross-Rubinstein (CRR) avec 100 pas de temps pour valoriser des calls et puts européens à la monnaie, en calculant les facteurs de hausse/baisse et les probabilités risque-neutre à partir de la volatilité et du taux sans risque.",
		"project5-detail2": "Sensibilité au moneyness — valorisation de calls et puts sur une plage de prix d'exercice (fortement dans la monnaie à fortement hors la monnaie) pour confirmer que les valeurs des options évoluent comme la théorie le prédit : le prix des calls baisse quand le prix d'exercice augmente, celui des puts augmente.",
		"project5-detail3": "Test de la parité call-put — vérification de la relation de parité (C − P = S − VA(K)) selon les prix d'exercice pour les options européennes et américaines, montrant qu'elle ne tient qu'à la monnaie pour les options européennes et qu'elle échoue ailleurs — avec une analyse des raisons pour lesquelles les options américaines la violent systématiquement en raison du droit d'exercice anticipé.",
		"project5-detail4": "Arbres binomiaux à plusieurs étapes — extension du modèle à un arbre à 3 étapes pour valoriser une option de vente, en retraçant l'évolution du prix de l'actif nœud par nœud et en actualisant les flux de paiement attendus à leur valeur présente.",
		"project5-download": "Télécharger le notebook",
		"project6-title": "Valorisation d'options exotiques : volatilité stochastique et diffusion à sauts",
		"project6-desc": "Valorisation d'options sous les modèles de Heston et de Merton par simulation Monte Carlo, avec extension aux options américaines à exercice anticipé et aux options à barrière — là où la théorie rencontre la complexité réelle de la valorisation d'options.",
		"project6-detail1": "Modèle de Heston (volatilité stochastique) — simulation de processus corrélés de prix et de variance par Monte Carlo (10 000 trajectoires) pour valoriser des calls et puts européens à la monnaie, en testant la sensibilité au paramètre de corrélation ρ entre les rendements de l'actif et la volatilité.",
		"project6-detail2": "Modèle de diffusion à sauts de Merton — modélisation de sauts de prix soudains (distribués selon Poisson) superposés à une diffusion standard, valorisation d'options sous différentes intensités de sauts et comparaison des courbes de prix obtenues avec le comportement plus lisse, piloté par la volatilité, du modèle de Heston.",
		"project6-detail3": "Estimation des Greeks — calcul numérique du Delta et du Gamma sous les deux modèles pour quantifier la sensibilité du prix de l'option à l'actif sous-jacent.",
		"project6-detail4": "Options américaines et exercice anticipé — valorisation d'un call américain sous le modèle de Heston par Monte Carlo avec régression par moindres carrés (approche de Longstaff-Schwartz), confirmant la prime d'exercice anticipé par rapport au prix européen.",
		"project6-detail5": "Options à barrière — valorisation d'options exotiques Up-and-In Call et Down-and-In Put sous diffusion à sauts, montrant comment les conditions de barrière peuvent fortement décoter une option par rapport à son équivalent européen classique.",
		"project6-download": "Télécharger le notebook",
		"project7-title": "Calibration de modèles stochastiques sur des données de marché réelles",
		"project7-desc": "Ajustement des modèles de Heston, Bates et CIR sur des données réelles d'options et de taux d'intérêt — de la calibration de la volatilité stochastique par valorisation de Fourier à la simulation d'une année complète de trajectoires de taux d'intérêt.",
		"project7-detail1": "Calibration du modèle de Heston — calibration du modèle de volatilité stochastique de Heston sur des prix réels d'options actions à 15 jours par valorisation basée sur Fourier (approche de Lewis/Carr-Madan) et optimisation globale (évolution différentielle), en convertissant les puts en calls synthétiques via la parité call-put et en vérifiant la condition de Feller sur les paramètres ajustés.",
		"project7-detail2": "Modèle de Bates (Heston + sauts) — extension de la calibration à des options à 60 jours à l'aide du modèle de Bates, qui superpose une composante de diffusion à sauts à la volatilité stochastique, pour tester si l'ajout de sauts améliore l'ajustement aux prix de marché.",
		"project7-detail3": "Modèle de taux d'intérêt CIR — calibration du modèle de Cox-Ingersoll-Ross sur la structure par terme de l'Euribor (7 à 360 jours), puis simulation de 100 000 trajectoires de taux d'intérêt sur un an pour estimer le taux Euribor à 12 mois attendu et son intervalle de confiance au 5e-95e centile.",
		"project7-download": "Télécharger le notebook",
		"project7-download-dataset": "Télécharger le jeu de données",
		"project8-title": "Volatilité à changement de régime : S&amp;P 500 vs. Bitcoin",
		"project8-desc": "Détection de régimes de volatilité haussiers/baissiers sur les actions et les cryptomonnaies à l'aide de modèles à changement de régime markoviens — comparant le comportement d'un indice traditionnel et d'un actif numérique très volatil selon les périodes calmes et turbulentes.",
		"project8-detail1": "Diagnostics de séries temporelles — analyse des rendements journaliers du S&amp;P 500 et du Bitcoin (2019-2022) à l'aide de la volatilité glissante, des graphiques ACF/PACF et des tests de Ljung-Box pour caractériser la structure d'autocorrélation de chaque série avant modélisation.",
		"project8-detail2": "Modèles à changement de régime markoviens — ajustement de modèles à deux régimes sur les deux actifs pour identifier des états distincts de faible et forte volatilité, en visualisant les changements de régime au regard d'événements de marché réels (le crash du COVID et le marché haussier qui a suivi, le marché baissier de 2022).",
		"project8-detail3": "Comparaison de modèles — comparaison de variantes du modèle avec différentes spécifications de moyenne et de variance à l'aide des critères AIC/BIC, en sélectionnant la spécification la mieux ajustée pour chaque actif.",
		"project8-detail4": "Autorégression à changement de régime — extension du modèle à un processus AR(1) à changement de régime markovien sur les rendements du S&amp;P 500, en estimant les probabilités de régime lissées dans le temps pour montrer l'évolution de la probabilité d'être dans un état de forte volatilité.",
		"project8-download": "Télécharger le notebook",
		"project9-title": "Bandits manchots pour la sélection d'actions : 2008 vs. 2020",
		"project9-desc": "Application de l'apprentissage par renforcement (algorithmes UCB et Epsilon-Greedy) pour sélectionner des actions pendant la crise financière de 2008 et le crash du COVID en 2020 — en traitant chaque action comme un bras de bandit et en laissant l'algorithme apprendre où allouer.",
		"project9-detail1": "Collecte de données et structure de corrélation — rassemblement des rendements journaliers de 30 actions (14 financières, 15 non financières) pendant la crise de septembre-octobre 2008, et utilisation d'un clustering hiérarchique sur la matrice de corrélation pour visualiser comment les actions se regroupaient sous la pression du marché.",
		"project9-detail2": "Algorithme UCB (Upper Confidence Bound) — implémentation de l'UCB à partir de zéro pour sélectionner séquentiellement des actions, en équilibrant l'exploitation des valeurs historiquement performantes et l'exploration de celles moins testées, en utilisant le rendement journalier de chaque action comme sa « récompense ».",
		"project9-detail3": "Algorithme Epsilon-Greedy — implémentation d'une seconde stratégie de bandit à des fins de comparaison, choisissant l'action la mieux connue la plupart du temps tout en explorant aléatoirement des alternatives une fraction du temps.",
		"project9-detail4": "Test de robustesse hors échantillon — réexécution des deux algorithmes sur les mêmes 30 actions pendant le crash du COVID de mars-avril 2020, en comparant les rendements cumulés entre UCB et Epsilon-Greedy pour voir quelle stratégie s'est le mieux adaptée à une crise totalement différente.",
		"project9-download": "Télécharger le notebook",
		"project10-title": "Fondements du machine learning pour la finance : clustering, ACP et arbres",
		"project10-desc": "Trois techniques fondamentales de ML appliquées à des données financières — regrouper des actifs selon leur comportement, réduire un portefeuille de 20 actions à ses principaux facteurs de risque, et prédire les rendements à partir du momentum et de la volatilité avec un arbre de régression.",
		"project10-detail1": "Clustering K-means — implémentation et visualisation pas à pas de l'algorithme K-means (initialisation des centroïdes, affectation des points, mise à jour des centroïdes) sur des données de type financier avec des variables de rendement et de volatilité, illustrant comment l'algorithme regroupe des instruments similaires.",
		"project10-detail2": "Analyse en composantes principales (ACP) — application de l'ACP aux rendements journaliers de 20 grandes actions (AAPL, MSFT, GOOGL, TSLA, JPM, entre autres) pour réduire la dimensionnalité du portefeuille et identifier les facteurs principaux à l'origine des mouvements conjoints des actions.",
		"project10-detail3": "Arbres de régression — entraînement d'un arbre de décision de régression pour prédire les rendements des actifs à partir de variables de momentum, de volatilité et de valeur, en utilisant une séparation entraînement/test respectant la chronologie pour tenir compte de la nature séquentielle des données financières, et évaluation de la performance avec le MSE et le R-carré.",
		"project10-download": "Télécharger le notebook",
		"project11-title": "LDA, réseaux de neurones et SVM pour la classification financière",
		"project11-desc": "Trois techniques de classification sur des données réelles et financières — analyse discriminante linéaire (LDA) pour la réduction de dimensionnalité, un réseau de neurones pour prédire les rendements du S&amp;P 500, et des SVM sur des tâches synthétiques de classification et de régression financières.",
		"project11-detail1": "Analyse discriminante linéaire (LDA) — application de la LDA au célèbre jeu de données Iris pour une réduction de dimensionnalité supervisée, puis association à un classifieur Random Forest pour évaluer la précision de classification via une matrice de confusion. Extension de la technique à une tâche synthétique de classification d'instruments financiers.",
		"project11-detail2": "Réseaux de neurones — construction d'un réseau de neurones feedforward (Keras/TensorFlow, avec régularisation par dropout) pour prédire les rendements du S&amp;P 500 à la période suivante à partir de variables construites, en utilisant une séparation entraînement/test respectant la chronologie.",
		"project11-detail3": "Machines à vecteurs de support (SVM) — implémentation de SVC et SVR sur des données financières synthétiques (rendements, volatilité, volume, momentum) pour des tâches de classification et de régression, avec ajustement des hyperparamètres par recherche sur grille et validation croisée.",
		"project11-download": "Télécharger le notebook",
		"project12-title": "Ajustement de modèles : optimisation des hyperparamètres, arbitrage biais-variance et méthodes d'ensemble",
		"project12-desc": "Ingénierie pratique du machine learning pour les modèles financiers — ajustement d'une forêt aléatoire par recherche aléatoire, diagnostic du surapprentissage à l'aide de courbes d'apprentissage, et comparaison des méthodes d'ensemble bagging, boosting et stacking.",
		"project12-detail1": "Optimisation des hyperparamètres — ajustement d'un régresseur Random Forest sur des données synthétiques de facteurs financiers à l'aide d'une recherche aléatoire avec validation croisée à 5 plis, en comparant la performance du modèle optimisé sur l'ensemble de test à celle d'un modèle de référence.",
		"project12-detail2": "Arbitrage biais-variance — diagnostic du sous-apprentissage et du surapprentissage sur quatre types de modèles (régression logistique régularisée, arbre de décision profond, arbre de décision peu profond, et ensemble Random Forest) à l'aide de courbes d'apprentissage, en visualisant comment la précision d'entraînement et de validation de chaque modèle diverge à mesure que les données augmentent.",
		"project12-detail3": "Méthodes d'ensemble — implémentation et comparaison de trois stratégies d'ensemble (bagging, boosting et stacking) sur une tâche de classification, en évaluant chacune par validation croisée pour voir quelle méthode de combinaison généralisait le mieux.",
		"project12-download": "Télécharger le notebook",
		"project13-title": "Deep learning pour la prédiction de prix : MLP vs. GAF-CNN",
		"project13-desc": "Comparaison d'architectures de réseaux de neurones pour la prédiction du S&amp;P 500 selon trois représentations de données — en testant si convertir des séries de prix en images (champs angulaires de Gram) pour un CNN surpasse un réseau de neurones standard.",
		"project13-detail1": "Analyse de stationnarité — test de la stationnarité des niveaux de prix du S&amp;P 500 via le test de Dickey-Fuller augmenté, puis application d'une différenciation fractionnaire pour trouver le meilleur équilibre entre suppression de la tendance et préservation de la mémoire de la série (contrairement aux simples rendements logarithmiques, qui atteignent la stationnarité mais perdent davantage d'information).",
		"project13-detail2": "Modèles MLP de référence — entraînement de réseaux de neurones feedforward sur trois représentations des mêmes données — niveaux de prix bruts, rendements logarithmiques et série différenciée fractionnairement — en utilisant des valeurs retardées comme variables, pour tester quelle représentation est la plus facile à apprendre pour un réseau de neurones.",
		"project13-detail3": "Modèles GAF-CNN — conversion de chaque série temporelle en images de champs angulaires de Gram et entraînement de réseaux de neurones convolutifs sur les « images » résultantes de la dynamique des prix, une technique peu conventionnelle mais de plus en plus populaire pour les séries temporelles financières.",
		"project13-detail4": "Comparaison exhaustive des modèles — évaluation des six combinaisons modèle/représentation par MSE et MAE, montrant qu'un MLP standard entraîné sur les rendements logarithmiques surpassait toutes les variantes CNN, y compris celles basées sur des images — un rappel utile que la sophistication architecturale ne l'emporte pas toujours sur des représentations plus simples et bien choisies.",
		"project13-download": "Télécharger le notebook",
		"project14-title": "Stratégie de trading LSTM sur des ETF multi-actifs",
		"project14-desc": "Construction de réseaux de neurones LSTM pour prédire et trader un univers de cinq ETF (actions, obligations, or, pétrole), puis backtest de la stratégie résultante contre un simple benchmark d'achat-conservation à poids égal.",
		"project14-detail1": "Modèles LSTM individuels — construction et entraînement d'un modèle LSTM distinct pour chacun des cinq ETF (SPY pour les actions, TLT et SHY pour les obligations longue et courte duration, GLD pour l'or, DBO pour le pétrole), prédisant les rendements de la période suivante à partir des séquences de prix historiques.",
		"project14-detail2": "Construction de la stratégie et backtest — conversion des prédictions du modèle en signaux de trading et backtest de la stratégie LSTM résultante contre un benchmark d'achat-conservation à poids égal, en évaluant la performance via les rendements cumulés, les drawdowns et les distributions de rendement.",
		"project14-detail3": "Modèle LSTM multi-sorties — extension de l'approche à un seul modèle LSTM multi-sorties prédisant conjointement les cinq ETF, pour tester si la modélisation des relations inter-actifs dans un seul réseau améliore les résultats par rapport à l'entraînement de modèles indépendants par actif.",
		"project14-download": "Télécharger le notebook",
		"project15-title": "Fuite de données et backtest walk-forward de modèles de trading par deep learning",
		"project15-desc": "Montre comment la fuite de données gonfle la performance apparente des modèles MLP, LSTM et CNN-GAF sur le SPY, puis les retteste avec un backtest walk-forward exempt de fuite.",
		"project15-detail1": "Construction d'un classifieur de direction à 5 jours sur 2 000 jours de rendements du SPY (10 rendements retardés comme variables, découpage chronologique 70/30).",
		"project15-detail2": "Démonstration de la fuite de données : labels construits à partir d'un quantile de rendement global et variables normalisées sur l'échantillon complet ; code d'une vérification comptant les échantillons d'entraînement dont les labels chevauchent la période de test.",
		"project15-detail3": "Implémentation d'un MLP, d'un LSTM (NumPy, portes et BPTT) et d'un CNN sur des images de champs angulaires de Gram des fenêtres de rendement.",
		"project15-detail4": "Backtest de la stratégie avec signaux long/short, trades non chevauchants sur 5 jours et coûts de 5 points de base ; métriques : rendement total/annualisé, volatilité, Sharpe, drawdown maximal, taux de réussite face à l'achat-conservation. Sur le dispositif avec fuite, le MLP et le CNN ont perdu de l'argent alors que l'achat-conservation affichait un Sharpe de 1,31.",
		"project15-detail5": "Validation walk-forward (fenêtres 500/500 et 500/100) avec normalisation et labels calculés à l'intérieur de chaque pli ; MLP et CNN-GAF réentraînés en PyTorch à chaque pli. La précision exempte de fuite, d'environ 59-60 %, reflétait surtout la prédiction de la classe majoritaire (rappel de la classe 1 de 1-3 %).",
		"project15-detail6": "Enseignement : la précision affichée masque une faible capacité prédictive ; seuls des tests walk-forward exempts de fuite, assortis de métriques de trading, donnent une image honnête.",
		"project15-download": "Télécharger le notebook",
		"project16-title": "Optimisation de portefeuille moyenne-variance, analyse factorielle et Monte Carlo",
		"project16-desc": "Construit et teste des portefeuilles moyenne-variance contraints sur 10 actions américaines, puis effectue une régression à 5 facteurs de Fama-French et vérifie l'optimiseur par simulation Monte Carlo.",
		"project16-detail1": "Téléchargement de deux années de prix hebdomadaires (juillet 2023 - juin 2025) pour 10 grandes capitalisations américaines réparties entre tech, banques, pharma, énergie et distribution.",
		"project16-detail2": "Résolution des portefeuilles à variance minimale globale et à Sharpe maximal avec SciPy (SLSQP, sans vente à découvert) ; le portefeuille à Sharpe maximal a atteint environ 41,7 % de rendement annualisé pour 19 % de volatilité (Sharpe in-sample d'environ 2,04).",
		"project16-detail3": "Ajout d'un poids maximal de 15 % par actif et tracé de la frontière efficiente avec et sans ce plafond.",
		"project16-detail4": "Test hors échantillon (juillet-septembre 2025) contre un benchmark, avec rendement total, Sharpe, drawdown maximal et taux de réussite. Les deux portefeuilles ont battu le benchmark (18,8 % et 16,4 % contre 12,6 %) ; le portefeuille contraint affichait un meilleur ratio de Sharpe (5,75 contre 5,61) avec une volatilité plus faible.",
		"project16-detail5": "Régression à 5 facteurs de Fama-French (MCO et Huber robuste) des rendements excédentaires du portefeuille : alpha positif significatif, aucune exposition factorielle significative, faible pouvoir explicatif (R² d'environ 0,09).",
		"project16-detail6": "Validation Monte Carlo : une classe d'optimiseur comparant SLSQP à 50 000 simulations de portefeuilles aléatoires, avec et sans plafond de poids. La variance correspondait à 0,15 % près, convergeant à 0,04 % près avec 100 000 simulations.",
		"project16-download": "Télécharger le notebook",
		"project17-title": "Stratégies de portefeuille : MVO vs 1/N, Black-Litterman et critère de Kelly",
		"project17-desc": "Compare des méthodes de construction de portefeuille sur des actions américaines : optimisation moyenne-variance contrainte, simulation de 5 000 tirages contre une pondération égale, Black-Litterman avec des vues d'investisseur, et dimensionnement par critère de Kelly.",
		"project17-detail1": "Optimisation d'un portefeuille de 7 actions (AAPL, NVDA, TSLA, XOM, REGN, LLY, JPM) sur données hebdomadaires de juillet 2023 à juin 2025, en comparant long seul, long seul avec un plafond de 20 %, et vente à découvert sans contrainte ; le plafond de 20 % a donné le meilleur ratio de Sharpe (0,131 hebdomadaire contre 0,099 et 0,098).",
		"project17-detail2": "Simulation de 5 000 portefeuilles aléatoires de 5 actions tirés d'un univers de 20 actions (estimation sur 2 ans, test hors échantillon sur 1 an). La pondération égale a battu l'optimisation à variance minimale en moyenne (14,0 % contre 11,6 %, significatif selon un test t apparié) ; le portefeuille optimisé l'a emporté dans les marchés baissiers (taux de réussite de 75 %) et a perdu dans les marchés haussiers, se comportant comme une stratégie défensive.",
		"project17-detail3": "Black-Litterman : rendements d'équilibre calculés à partir des pondérations de capitalisation boursière et d'une estimation de l'aversion au risque, combinés à 7 vues d'investisseur (dont des vues relatives NVDA vs AAPL et REGN vs LLY) pour obtenir des rendements et des pondérations a posteriori, comparés à un portefeuille pondéré par la capitalisation boursière, in et hors échantillon.",
		"project17-detail4": "Critère de Kelly : implémentation du dimensionnement Kelly complet, demi et double, en mesurant le Sharpe, la volatilité et les drawdowns sur les périodes d'entraînement et de test, et montrant comment l'effet de levier amplifie le risque sans améliorer le ratio de Sharpe.",
		"project17-download": "Télécharger le notebook",
		"project18-title": "Construction robuste de portefeuille : débruitage, HRP et validation croisée purgée",
		"project18-desc": "Teste 8 stratégies de construction de portefeuille sur 10 actions américaines, combinant débruitage de la covariance, parité de risque hiérarchique (HRP) et validation croisée purgée combinatoire (CPCV) pour réduire le surapprentissage.",
		"project18-detail1": "Implémentation à partir de zéro du débruitage de la covariance, de la parité de risque hiérarchique (clustering hiérarchique des actifs) et de la validation croisée purgée combinatoire (de nombreuses combinaisons entraînement/test avec purge et embargo pour éviter les fuites), sur 10 actions américaines (janvier 2024 - juin 2025).",
		"project18-detail2": "Construction de 8 stratégies combinant ces méthodes, avec un portefeuille à Sharpe maximal plafonné à 15 % comme référence, et comparaison du rendement annuel, de la volatilité, du Sharpe, du drawdown maximal, de la CVaR et de la stabilité des pondérations.",
		"project18-detail3": "Principaux résultats : le MSRP avec CPCV s'est classé premier (Sharpe de 0,61 contre 0,25 pour la référence) ; le HRP seul avait le drawdown le plus faible (-14 % contre -22 %) ; le débruitage seul apportait peu ; combiner les trois méthodes n'a pas aidé.",
		"project18-detail4": "Vérification hors échantillon sur juillet 2025, un mois non utilisé pour construire les portefeuilles : la référence a légèrement mieux performé (Sharpe de 8,1 contre 7,0), rapporté tel quel.",
		"project18-detail5": "Discussion de l'arbitrage entre prédiction et interprétation, entre des portefeuilles simples et explicables et des portefeuilles plus complexes et mieux validés.",
		"project18-download": "Télécharger le notebook",
		"project19-title": "Facteurs du prix du pétrole : pipeline de données, nettoyage et réseau causal",
		"project19-desc": "Construit un pipeline de données multi-sources pour les facteurs de risque du prix du pétrole, avec un processus de nettoyage en trois étapes, une analyse exploratoire et un diagramme de réseau bayésien des facteurs.",
		"project19-detail1": "Collecte du prix du pétrole (WTI), du S&amp;P 500, de l'indice du dollar américain, du VIX, d'ETF du secteur énergétique, du PIB américain, de la production industrielle et du CPI depuis Yahoo Finance et FRED, et fusion en un seul jeu de données de séries temporelles.",
		"project19-detail2": "Nettoyage en trois étapes : winsorisation des valeurs aberrantes extrêmes à 4 écarts-types ; suppression des horodatages dupliqués, des valeurs négatives impossibles et des sauts supérieurs à 5 écarts-types ; imputation des valeurs manquantes selon le type de variable (report de la dernière valeur pour les prix de marché, interpolation temporelle pour les séries macroéconomiques).",
		"project19-detail3": "Analyse exploratoire : distributions, séries temporelles, carte de chaleur des corrélations, matrice de nuages de points et nuages de points par rapport au prix du pétrole.",
		"project19-detail4": "Réalisation d'un diagramme de réseau bayésien des principaux facteurs du prix du pétrole (offre, dollar, VIX) et de leur effet sur les actions du secteur énergétique (XLE, XOP, USO), comme base pour une modélisation du risque ultérieure.",
		"project19-download": "Télécharger le notebook",
		"project20-title": "Régimes du marché pétrolier : modèle de Markov caché sur le WTI",
		"project20-desc": "Détecte les régimes haussier, baissier et stagnant des rendements du pétrole WTI avec un modèle de Markov caché gaussien à 3 états, et explore l'apprentissage de structure de réseau bayésien.",
		"project20-detail1": "Téléchargement de l'historique des futures WTI (depuis août 2000) via yfinance et calcul des rendements logarithmiques journaliers.",
		"project20-detail2": "Ajustement d'un modèle de Markov caché gaussien à 3 états (covariance complète) sur les rendements, les états étant ordonnés par rendement moyen pour les lire comme des régimes baissier, stagnant et haussier.",
		"project20-detail3": "Superposition des régimes sur l'historique des prix, tracé de la distribution des rendements de chaque régime et de la matrice de transition pour montrer la persistance de chaque régime.",
		"project20-detail4": "Utilisation de l'apprentissage de structure par montée de colline (pgmpy) pour apprendre les dépendances entre le régime et des variables macroéconomiques ; cette étape utilise des variables simulées et ne fait que démontrer la méthode, sans constituer un résultat empirique.",
		"project20-download": "Télécharger le notebook",
		"project21-title": "Prévision des régimes du prix du pétrole : discrétisation par HMM et réseaux bayésiens",
		"project21-desc": "Construit un pipeline attentif aux fuites de données pour prévoir les régimes du prix du pétrole du mois suivant, combinant une discrétisation par états HMM de 13 variables de marché et macroéconomiques avec un réseau bayésien appris par recherche par montée de colline.",
		"project21-detail1": "Assemblage de données mensuelles de 2000 à 2026 sur le pétrole, les actions, le dollar américain, le VIX, les ETF énergétiques et des séries macroéconomiques américaines (Yahoo Finance, FRED), avec un découpage chronologique 80/10/10 entraînement/validation/test.",
		"project21-detail2": "Entraînement d'un modèle de Markov caché à 3 états pour chacune des 13 variables afin de les convertir en régimes baissier, stagnant et haussier, l'étiquetage des états étant dérivé uniquement de l'ensemble d'entraînement.",
		"project21-detail3": "Définition d'un graphe causal élaboré par des experts, affiné par une recherche de structure par montée de colline (maximum 3 parents par nœud), en comparant les scores K2, BIC et BDeu sur un objectif de prévision à un pas.",
		"project21-detail4": "Ajout d'un garde-fou signalant des scores de validation anormalement bons ; la précision quasi parfaite obtenue en finale a déclenché ce garde-fou et est considérée comme un probable artefact de fuite de données, et non un résultat réel. La simulation de trading n'a montré aucun gain par rapport à l'achat-conservation, ce qui conforte cette lecture.",
		"project21-detail5": "Enseignement : un modèle qui semble parfait cache généralement une fuite, d'où la nécessité, à l'étape suivante, de décoder les régimes de façon causale et de retester.",
		"project21-download": "Télécharger le notebook",

		"experiences-title": "Expériences",
		"education-title": "Éducation",
		"education1": "Master en Ingénierie Financière",
		"education1-desc": "Spécialisation en Finance Quantitative.",
		"education2": "Master en Administration des Affaires",
		"education2-desc": "Spécialisation en Finance.",
		"education3": "Licence en Comptabilité, Finance &amp; Audit",
		"education3-desc": "Spécialisation en Finance.",
		"education4": "Formation en Design Graphique",
		"education4-desc": "Spécialisation en design visuel.",
		"work-title": "Expérience professionnelle",
		"work1": "Fondatrice &amp; PDG",
		"work1-period": "2023–Aujourd'hui",
		"work1-desc": "Fondation et gestion complète d'une marque lifestyle grand public, en charge de la planification financière, du sourcing fournisseurs et de l'acquisition client.",
		"work2": "Assistante Communication",
		"work2-desc": "Coordination des communications étudiantes, réseaux sociaux et événements.",
		"work3": "Stagiaire Audit &amp; Comptabilité",
		"work3-desc": "Réconciliation bancaire, audits, traitement de factures et documents.",
		"work4": "Stagiaire d'été",
		"work4-desc": "Soutien aux missions de conseil d'un cabinet ouest-africain, contribution à la recherche et aux livrables clients.",
		"work5": "Designer Graphique",
		"work5-desc": "Gestion de plusieurs briefs clients simultanés, traduisant les besoins en livrables précis et alignés sur la marque.",

		"contact-title": "Contact",
		"contact-email-label": "Email",
		"contact-address-label": "Adresse",
		"contact-cta-text": "Le plus rapide pour me joindre est l'email — je lis et réponds à chaque message.",
		"email-me": "M'écrire",

		"footer-tagline": "Aspirante Analyste Sales &amp; Trading &mdash; Master en Ingénierie Financière.",
		"footer-quick-links": "Liens rapides",
		"footer-contact": "Contact",
		"copyright": "© 2026 Anne-Marie Atignon. Tous droits réservés.",
		"last-updated-label": "Dernière mise à jour : {{LAST_UPDATED_FR}}",

		"404-code": "404",
		"404-title": "Cette page n'a pas survécu au backtest.",
		"404-body": "Je ne trouve pas ce que vous cherchiez — le lien a peut-être changé. Voici le chemin du retour.",
		"404-home-link": "Retour à l'accueil",
		"404-projects-link": "Voir mes projets"
	}
};

function changeLanguage(lang) {
	document.documentElement.setAttribute('lang', lang);

	document.querySelectorAll('[data-key]').forEach(el => {
		const key = el.getAttribute('data-key');
		if (translations[lang] && translations[lang][key] !== undefined) {
			el.innerHTML = translations[lang][key];
		}
	});

	document.querySelectorAll('[data-key-placeholder]').forEach(el => {
		const key = el.getAttribute('data-key-placeholder');
		if (translations[lang] && translations[lang][key] !== undefined) {
			el.setAttribute('placeholder', translations[lang][key]);
		}
	});

	document.querySelectorAll('.lang-btn').forEach(btn => {
		btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
	});

	const cvLink = document.getElementById('cvDownloadLink');
	if (cvLink) {
		if (lang === 'fr') {
			cvLink.setAttribute('href', '/assets/FR_Resume_AnneMarie_ATIGNON.pdf');
			cvLink.setAttribute('download', 'CV_AnneMarie_ATIGNON.pdf');
		} else {
			cvLink.setAttribute('href', '/assets/EN_Resume_AnneMarie_ATIGNON.pdf');
			cvLink.setAttribute('download', 'CV_AnneMarie_ATIGNON.pdf');
		}
	}

	try { localStorage.setItem('preferredLanguage', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(button => {
	button.addEventListener('click', () => changeLanguage(button.getAttribute('data-lang')));
});

(() => {
	let savedLang = 'en';
	try { savedLang = localStorage.getItem('preferredLanguage') || 'en'; } catch (e) {}
	changeLanguage(savedLang);
})();

// ---------- Nav "Download my CV" link (header): mirrors #cvDownloadLink's
// language-aware href without touching changeLanguage() itself ----------
(function initNavCvLink() {
	const navCvLink = document.getElementById('navCvDownloadLink');
	if (!navCvLink) return;

	function syncNavCvLink() {
		const lang = document.documentElement.getAttribute('lang') || 'en';
		navCvLink.setAttribute('href', lang === 'fr' ? '/assets/FR_Resume_AnneMarie_ATIGNON.pdf' : '/assets/EN_Resume_AnneMarie_ATIGNON.pdf');
		navCvLink.setAttribute('download', 'CV_AnneMarie_ATIGNON.pdf');
	}

	document.querySelectorAll('.lang-btn').forEach((btn) => {
		btn.addEventListener('click', syncNavCvLink);
	});
	syncNavCvLink();
})();

// ---------- Nav active page ----------
(function markActiveNavLink() {
	const path = window.location.pathname.replace(/\/$/, '') || '/';
	document.querySelectorAll('.nav-links a[data-nav-path]').forEach((a) => {
		const linkPath = a.getAttribute('data-nav-path');
		const isActive = linkPath === path || (linkPath === '/' && path === '');
		if (isActive) {
			a.setAttribute('aria-current', 'page');
		}
	});
})();

// ---------- Mobile nav toggle ----------
(function initNavToggle() {
	const navToggle = document.getElementById('navToggle');
	const navLinks = document.getElementById('navLinks');
	if (!navToggle || !navLinks) return;
	navToggle.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('is-open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
	navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
		navLinks.classList.remove('is-open');
		navToggle.setAttribute('aria-expanded', 'false');
	}));
})();

// ---------- Top band: single straight scrolling keyword band ----------
(function initTopBand() {
	const set1 = document.getElementById('topBandSet1');
	const set2 = document.getElementById('topBandSet2');
	if (!set1 || !set2) return;

	// Exactly the keywords the two former diagonal marquee bars contained,
	// merged into one list, nothing added or removed.
	const KEYWORDS = [
		'Financial Engineering',
		'Data &amp; Machine Learning',
		'Markets &amp; Trading',
		'Quantitative Finance',
		'Risk Management',
		'Python &amp; R',
		'Sales &amp; Trading',
	];

	const html = KEYWORDS.map((k) => (
		'<span class="top-band-item">' + k + '</span><span class="top-band-sep" aria-hidden="true">&middot;</span>'
	)).join('');

	set1.innerHTML = html;
	set2.innerHTML = html;
})();

// ---------- Project filters ----------
const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
const projectCards = document.querySelectorAll('#projectGrid .project-card');
const projectGrid = document.getElementById('projectGrid');
const moreBtn = document.getElementById('moreProjectsBtn');
let currentFilter = 'all';
let moreExpanded = false;

function setMoreBtnLabel() {
	if (!moreBtn) return;
	const lang = document.documentElement.getAttribute('lang') || 'en';
	const key = moreExpanded ? 'show-less-projects' : 'more-projects';
	moreBtn.setAttribute('data-key', key);
	if (translations[lang] && translations[lang][key] !== undefined) {
		moreBtn.innerHTML = translations[lang][key];
	}
}

function applyProjectFilter() {
	projectCards.forEach(card => {
		const matchesFilter = currentFilter === 'all' || card.getAttribute('data-category') === currentFilter;
		const isCollapsedRisk = currentFilter === 'all' && card.getAttribute('data-category') === 'risk' && !moreExpanded;
		card.classList.toggle('project-card-hidden', !matchesFilter || isCollapsedRisk);
	});
	if (moreBtn) {
		moreBtn.classList.toggle('project-card-hidden', currentFilter !== 'all');
	}
	setMoreBtnLabel();
}

function activateFilter(btn) {
	currentFilter = btn.getAttribute('data-filter');
	moreExpanded = false;
	filterBtns.forEach(b => {
		const isActive = b === btn;
		b.classList.toggle('active', isActive);
		b.setAttribute('aria-selected', String(isActive));
		b.setAttribute('tabindex', isActive ? '0' : '-1');
	});
	if (projectGrid) {
		projectGrid.setAttribute('aria-labelledby', btn.id);
	}
	applyProjectFilter();
}

filterBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => activateFilter(btn));

	btn.addEventListener('keydown', (e) => {
		let newIdx = null;
		if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
			newIdx = (idx + 1) % filterBtns.length;
		} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
			newIdx = (idx - 1 + filterBtns.length) % filterBtns.length;
		} else if (e.key === 'Home') {
			newIdx = 0;
		} else if (e.key === 'End') {
			newIdx = filterBtns.length - 1;
		}
		if (newIdx !== null) {
			e.preventDefault();
			const target = filterBtns[newIdx];
			target.focus();
			activateFilter(target);
		}
	});
});

if (moreBtn) {
	moreBtn.addEventListener('click', () => {
		moreExpanded = !moreExpanded;
		applyProjectFilter();
	});
}

applyProjectFilter();

// ---------- Project card "show details" toggles ----------
document.querySelectorAll('.detail-toggle').forEach(btn => {
	btn.addEventListener('click', () => {
		const target = document.getElementById(btn.getAttribute('aria-controls'));
		if (!target) return;
		const expanded = target.classList.toggle('is-expanded');
		btn.setAttribute('aria-expanded', String(expanded));
		const key = expanded ? 'hide-details' : 'show-details';
		btn.setAttribute('data-key', key);
		const lang = document.documentElement.getAttribute('lang') || 'en';
		if (translations[lang] && translations[lang][key] !== undefined) {
			btn.innerHTML = translations[lang][key];
		}
	});
});

// ---------- Market ticker ----------
(function initMarketTicker() {
	const section = document.getElementById('marketTicker');
	const set1 = document.getElementById('marketTickerSet1');
	const set2 = document.getElementById('marketTickerSet2');
	const asOfEl = document.getElementById('marketTickerAsOf');
	if (!section || !set1 || !set2 || !asOfEl) return;

	const REFRESH_MS = 5 * 60 * 1000;
	const MAX_CACHE_AGE_MS = 24 * 60 * 60 * 1000;
	const CACHE_KEY = 'marketTickerCache';
	let lastPayload = null;
	let lastFetchAt = 0;

	function escapeHtml(str) {
		return String(str).replace(/[&<>"']/g, (c) => ({
			'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
		}[c]));
	}

	function buildChangeHTML(changePct) {
		const rounded = Math.round(changePct * 100) / 100;
		let cls = 'is-flat';
		let glyph = '–';
		let signedPct = '0.00';
		if (rounded > 0) {
			cls = 'is-up';
			glyph = '▲';
			signedPct = '+' + rounded.toFixed(2);
		} else if (rounded < 0) {
			cls = 'is-down';
			glyph = '▼';
			signedPct = rounded.toFixed(2);
		}
		return '<span class="ticker-item-change ' + cls + '">' + glyph + ' ' + signedPct + '%</span>';
	}

	function buildItemHTML(item) {
		return '<span class="ticker-item">' +
			'<span class="ticker-item-label">' + escapeHtml(item.label) + '</span>' +
			'<span class="ticker-item-value">' + escapeHtml(item.value) + escapeHtml(item.unit || '') + '</span>' +
			buildChangeHTML(item.changePct) +
			'</span><span class="ticker-divider" aria-hidden="true">&mdash;</span>';
	}

	function renderAsOf() {
		if (!lastPayload) return;
		const lang = document.documentElement.getAttribute('lang') || 'en';
		const d = new Date(lastPayload.asOf);
		let formatted;
		try {
			formatted = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
				dateStyle: 'medium', timeStyle: 'short',
			}).format(d);
		} catch (e) {
			formatted = lastPayload.asOf;
		}
		const prefixKey = lastPayload.isCached ? 'markets-last-update-prefix' : 'markets-asof-prefix';
		const fallbackPrefix = lastPayload.isCached ? 'Last update:' : 'As of';
		const prefix = (translations[lang] && translations[lang][prefixKey]) || fallbackPrefix;
		asOfEl.textContent = ' — ' + prefix + ' ' + formatted;

		const disclosureEl = section.querySelector('.market-ticker-disclosure span[data-key="markets-disclosure"]');
		if (disclosureEl && translations[lang] && translations[lang]['markets-disclosure'] !== undefined) {
			disclosureEl.textContent = translations[lang]['markets-disclosure'];
		}
	}

	// payload is only ever real data: a live /api/quotes response, or a
	// previously successful one read back from localStorage (isCached
	// true), never an invented/static value.
	function render(payload, isCached) {
		if (!payload || !Array.isArray(payload.items) || payload.items.length === 0) return;
		lastPayload = Object.assign({}, payload, { isCached: !!isCached });
		const html = payload.items.map(buildItemHTML).join('');
		set1.innerHTML = html;
		set2.innerHTML = html;
		renderAsOf();
		section.hidden = false;
	}

	// Live data failed or was empty: fall back to the last successful
	// response cached in localStorage, but only if it is less than 24h
	// old. Otherwise hide the whole strip gracefully — no empty box,
	// no console error, no invented numbers.
	function tryCacheOrHide() {
		try {
			const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
			if (cached && cached.payload && Date.now() - cached.fetchedAt < MAX_CACHE_AGE_MS) {
				render(cached.payload, true);
				return;
			}
		} catch (e) {}
		section.hidden = true;
	}

	function loadLive() {
		lastFetchAt = Date.now();
		fetch('/api/quotes')
			.then((r) => { if (!r.ok) throw new Error('quotes http ' + r.status); return r.json(); })
			.then((data) => {
				if (data && Array.isArray(data.items) && data.items.length > 0) {
					render(data, false);
					try {
						localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), payload: data }));
					} catch (e) {}
				} else {
					tryCacheOrHide();
				}
			})
			.catch(() => { tryCacheOrHide(); });
	}

	loadLive();

	setInterval(() => {
		if (document.visibilityState !== 'visible') return;
		if (Date.now() - lastFetchAt < REFRESH_MS) return;
		loadLive();
	}, REFRESH_MS);

	document.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'visible' && Date.now() - lastFetchAt >= REFRESH_MS) {
			loadLive();
		}
	});

	document.querySelectorAll('.lang-btn').forEach((btn) => {
		btn.addEventListener('click', renderAsOf);
	});
})();

// ---------- Certifications (compact rows) ----------
(function initCertifications() {
	const container = document.getElementById('certsContainer');
	const counterEl = document.getElementById('certsCounter');
	const toggleBtn = document.getElementById('certsToggleBtn');
	if (!container || !counterEl || !toggleBtn) return;

	const CATEGORY_ORDER = [
		'quant-finance', 'data-science-ml', 'ai-data-eng',
		'programming-software', 'professional-skills', 'competitions',
	];
	let certs = [];
	let expanded = false;

	function escapeHtml(str) {
		return String(str).replace(/[&<>"']/g, (c) => ({
			'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
		}[c]));
	}

	function shortIssuer(issuer) {
		return issuer.split(' · ')[0].split(' (')[0];
	}

	function formatTemplate(str, vars) {
		return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
	}

	function buildRowHTML(cert) {
		const linkHtml = cert.url
			? '<a class="cert-link" href="' + escapeHtml(cert.url) + '" target="_blank" rel="noopener noreferrer" data-key="certs-view-credential">View credential</a>'
			: '<span></span>';
		return '<div class="cert-row' + (cert.featured ? '' : ' certs-hidden') + '">' +
			'<span class="cert-title">' + escapeHtml(cert.title) + '</span>' +
			'<span class="cert-issuer">' + escapeHtml(cert.issuer) + '</span>' +
			'<span class="cert-date">' + (cert.date ? escapeHtml(cert.date) : '') + '</span>' +
			linkHtml +
			'</div>';
	}

	function render() {
		const lang = document.documentElement.getAttribute('lang') || 'en';
		const byCategory = new Map();
		certs.forEach((c) => {
			if (!byCategory.has(c.category)) byCategory.set(c.category, []);
			byCategory.get(c.category).push(c);
		});

		let html = '';
		CATEGORY_ORDER.forEach((slug) => {
			const list = byCategory.get(slug);
			if (!list || list.length === 0) return;
			const hasFeatured = list.some((c) => c.featured);
			const categoryHidden = !expanded && !hasFeatured;
			const catKey = 'cat-' + slug;
			const catLabel = (translations[lang] && translations[lang][catKey]) || slug;
			html += '<div class="certs-category' + (categoryHidden ? ' certs-hidden' : '') + '">' +
				'<h3 data-key="' + catKey + '">' + catLabel + '</h3>' +
				'<div class="certs-rows">' + list.map(buildRowHTML).join('') + '</div></div>';
		});
		container.innerHTML = html;

		if (expanded) {
			container.querySelectorAll('.certs-hidden').forEach((el) => el.classList.remove('certs-hidden'));
		}

		const shown = expanded ? certs.length : certs.filter((c) => c.featured).length;
		const counterTpl = (translations[lang] && translations[lang]['certs-showing-count']) || 'Showing {shown} of {total}';
		counterEl.textContent = formatTemplate(counterTpl, { shown, total: certs.length });

		const toggleKey = expanded ? 'certs-hide' : 'certs-show-all';
		toggleBtn.setAttribute('data-key', toggleKey);
		toggleBtn.setAttribute('aria-expanded', String(expanded));
		if (translations[lang] && translations[lang][toggleKey] !== undefined) {
			toggleBtn.innerHTML = translations[lang][toggleKey];
		}
	}

	toggleBtn.addEventListener('click', () => {
		expanded = !expanded;
		render();
	});

	document.querySelectorAll('.lang-btn').forEach((btn) => {
		btn.addEventListener('click', () => render());
	});

	fetch('/assets/certifications.json')
		.then((r) => { if (!r.ok) throw new Error('certs http ' + r.status); return r.json(); })
		.then((data) => {
			if (Array.isArray(data)) {
				certs = data;
				render();
			}
		})
		.catch(() => { /* section header stays visible; body just stays empty */ });
})();
