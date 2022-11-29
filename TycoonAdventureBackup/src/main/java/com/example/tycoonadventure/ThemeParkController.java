package com.example.tycoonadventure;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.effect.DropShadow;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.paint.Color;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.time.LocalTime;
import java.util.ArrayList;
import java.text.NumberFormat;

public class ThemeParkController {

    @FXML
    public ImageView arcadeImageView1;
    public ImageView TOTImageView1;
    public ImageView rollercoasterImageView1;
    public ImageView jungleCruiseImageView1;
    public ImageView piratesOfTheCaribbeanImageView1;
    public ImageView RORImageView1;
    public ImageView arcadeImageView2;
    public ImageView TOTImageView2;
    public ImageView rollercoasterImageView2;
    public ImageView jungleCruiseImageView2;
    public ImageView piratesOfTheCaribbeanImageView2;
    public ImageView RORImageView2;
    public ImageView currentRatingImageView1;
    public ImageView currentRatingImageView2;
    public ImageView currentRatingImageView3;
    public ImageView currentRatingImageView4;
    public ImageView currentRatingImageView5;
    public ImageView currentRatingImageView6;
    public ImageView newspaperCampaignImageView;
    public ImageView radioCampaignImageView;
    public ImageView TVCampaignImageView;
    public ImageView smartphoneCampaignImageView;
    public ImageView parkingImageView;
    public ImageView surveillanceImageView;
    public ImageView janitorialStaffImageView;
    public ImageView securityGuardsImageView;
    public ImageView strollerRentalsImageView;
    public ImageView restroomsImageView;
    public ImageView maintenanceStaffImageView;
    public ImageView restaurantsImageView;
    public ImageView transportationImageView;
    public ImageView lockerRoomsImageView;

    @FXML
    public Label arcadePriceLabel;
    public Label TOTPriceLabel;
    public Label rollercoasterPriceLabel;
    public Label jungleCruisePriceLabel;
    public Label piratesOfTheCaribbeanPriceLabel;
    public Label RORPriceLabel;
    public Label currentRatingLabel1;
    public Label currentRatingLabel2;
    public Label currentRatingLabel3;
    public Label currentRatingLabel4;
    public Label currentRatingLabel5;
    public Label currentRatingLabel6;
    public Label seatsLabel1;
    public Label seatsLabel2;
    public Label seatsLabel3;
    public Label seatsLabel4;
    public Label seatsLabel5;
    public Label seatsLabel6;
    public Label queueLabel2;
    public Label queueLabel3;
    public Label queueLabel4;
    public Label queueLabel5;
    public Label queueLabel6;
    public Label ticketPriceLabel1;
    public Label ticketPriceLabel2;
    public Label ticketPriceLabel3;
    public Label ticketPriceLabel4;
    public Label ticketPriceLabel5;
    public Label ticketPriceLabel6;
    public Label increaseThrillLabel;
    public Label increaseSeatingLabel;
    public Label increaseQueueLabel;
    public Label newspaperCampaignLabel;
    public Label radioCampaignLabel;
    public Label TVCampaignLabel;
    public Label smartphoneCampaignLabel;
    public Label startCampaignLabel;
    public Label yearLabel;
    public Label customerFeedbackLabel;
    public Label parkingSpacesLabel;
    public Label surveillanceSystemsLabel;
    public Label janitorialStaffLabel;
    public Label securityGuardsLabel;
    public Label strollerRentalsLabel;
    public Label restroomsLabel;
    public Label maintenanceStaffLabel;
    public Label restaurantsLabel;
    public Label transportationLabel;
    public Label lockerRoomsLabel;
    public Label currentAvailableCashVal;
    public Label loanInfo;
    public Label notEnoughMoneyLabel;
    public Label yearlyCustomerCount1Label;
    public Label yearlyCustomerCount2Label;
    public Label yearlyCustomerCount3Label;
    public Label yearlyCustomerCount4Label;
    public Label yearlyCustomerCount5Label;
    public Label yearlyCustomerCount6Label;

    @FXML
    public Button playGameBtn;
    public Button buildAttractionBtn;
    public Button increaseThrillBtn;
    public Button increaseSeatingBtn;
    public Button increaseQueueBtn;
    public Button startCampaignBtn;
    public Button advanceYearBtn;
    public Button themeParkUpgradeBtn;

    @FXML
    public TabPane tabPane;

    @FXML
    public TextField goalMoneyAmountText;

    @FXML
    public TableView<Attraction> attractionsFinancialsTable;
    public TableColumn<Attraction, String> attractionCol;
    public TableColumn<Attraction, Integer> attractionRevCol;
    public TableColumn<Attraction, Integer> attractionCostCol;
    public TableColumn<Attraction, Integer> attractionProfitCol;

    InputStream stream1 = new FileInputStream("C:\\Users\\THAKKAR-FAMILY LAPTP\\Documents\\Hersh\\TycoonAdventure\\src\\main\\resources\\com\\example\\tycoonadventure\\2stars-removebg-preview.png");
    InputStream stream2 = new FileInputStream("C:\\Users\\THAKKAR-FAMILY LAPTP\\Documents\\Hersh\\TycoonAdventure\\src\\main\\resources\\com\\example\\tycoonadventure\\3stars-removebg-preview.png");
    InputStream stream3 = new FileInputStream("C:\\Users\\THAKKAR-FAMILY LAPTP\\Documents\\Hersh\\TycoonAdventure\\src\\main\\resources\\com\\example\\tycoonadventure\\4stars-removebg-preview.png");
    InputStream stream4 = new FileInputStream("C:\\Users\\THAKKAR-FAMILY LAPTP\\Documents\\Hersh\\TycoonAdventure\\src\\main\\resources\\com\\example\\tycoonadventure\\5stars-removebg-preview.png");
    Image ratingImg1 = new Image(stream1);
    Image ratingImg2 = new Image(stream2);
    Image ratingImg3 = new Image(stream3);
    Image ratingImg4 = new Image(stream4);

    public String goalMoneyAmountStr;
    public int goalMoneyAmount;
    public int goalMoneyRemaining;
    public int goalYearsRemaining;
    public int initialLoan;

    public Attraction[] attractionsArr = {null,null,null,null,null,null};
    public BadEvent[] badEventArr = {null,null,null,null,null,null,null,null,null,null,null,null,null};
    public ThemeParkUpgrade[] themeParkUpgradeArr = {null, null, null, null, null, null, null, null, null, null};
    public ThemeParkUpgrade[] marketingCampaignArr = {null, null, null, null};

    public LocalTime startTime;
    public Attraction pumbaasFunAndGamesArcade;
    public Attraction TwilightZoneRide;
    public Attraction RocknRollerCoaster;
    public Attraction JungleCruise;
    public Attraction StarWarsRR;
    public Attraction PiratesOfTheCaribbeanRide;
    public Attraction upgradeAttr;
    public ThemeParkUpgrade parking;
    public ThemeParkUpgrade surveillance;
    public ThemeParkUpgrade janitorialStaff;
    public ThemeParkUpgrade securityGuards;
    public ThemeParkUpgrade strollers;
    public ThemeParkUpgrade restrooms;
    public ThemeParkUpgrade maintenanceStaff;
    public ThemeParkUpgrade restaurants;
    public ThemeParkUpgrade transportation;
    public ThemeParkUpgrade lockers;
    public ThemeParkUpgrade upgradeThemeParkAspect;
    public ThemeParkUpgrade marketingCampaign;
    public ThemeParkUpgrade newspaperCampaign = new ThemeParkUpgrade(15000,"Newspaper");
    public ThemeParkUpgrade radioCampaign = new ThemeParkUpgrade(20000,"Radio");
    public ThemeParkUpgrade TVCampaign = new ThemeParkUpgrade(25000,"TV");
    public ThemeParkUpgrade smartphoneCampaign = new ThemeParkUpgrade(30000,"Smartphone");
    public String customerFeedback1 = "";
    public String customerFeedback2 = "";
    public int buyAttractionIndexSelected=-1;
    public int upgradeAttractionIndexSelected = -1;
    public int upgradeThemeParkIndexSelected = -1;
    public int marketingCampaignIndexSelected = -1;
    public int annualPercentInterest = 4;
    public int loanDurationInYears = 10;
    public boolean timerExpired = false;
    public double initialBankBalance = 700000;
    public double downPayment = 0;
    public int percentDownPayment = 30;
    public double totalCurrentCash = 0;
    public double loanPrincipalToBePaid=0;
    public double loanInterestAmountToBePaid=0;
    public double loanRemainingAmount=0;
    public double yearlyLoanPaymentToBeMade;
    public double yearlyPrincipalPayment=0;
    public double yearlyLoanInterestPayment=0;
    public double numberToSubtractFromTotalCurrentCash;
    public double yearlyIncomeFromAllAttractions=0;
    public double yearlyNetIncome=0;
    public double yearlyIncomeTax=0;
    public double cumulativeNetIncome;
    public int yearNum = 0;
    public int arcadeRating = 1;
    public int TOTRating = 1;
    public int rollercoasterRating = 1;
    public int jungleCruiseRating = 1;
    public int piratesOfTheCaribbeanRating = 1;
    public int RORRating = 1;
    public int attractionGainedCustomers;
    public BadEvent badEvent;
    public ArrayList<Attraction> attractionsOwned = new ArrayList<Attraction>();
    public ArrayList<ThemeParkUpgrade> upgradesPerformed = new ArrayList<ThemeParkUpgrade>();
    public boolean dontShowWon = false;
    public boolean allAttractionsUnlocked = false;
    public boolean[] buyAttractionClickedArr = {false,false,false,false,false,false};
    public boolean[] upgradeAttractionClickedArr = {false,false,false,false,false,false};
    public boolean[] upgradeThemeParkClickedArr = {false,false,false,false,false,false,false,false,false,false};
    public boolean[] marketingCampaignsArr = {false,false,false,false};
    public boolean won=false;
    public boolean lost = false;

    public ThemeParkController() throws FileNotFoundException
    {
        pumbaasFunAndGamesArcade = new Attraction("Pumbaa's Fun and Games Arcade", 1000000, true, 25, 200, 0);
        TwilightZoneRide = new Attraction("Twilight Zone Tower of Terror", 400000, false, 15, 16, 8);
        RocknRollerCoaster = new Attraction("Rock 'n' Roller Coaster", 100000, false, 15, 16, 8);
        JungleCruise = new Attraction("Jungle Cruise", 200000, false, 10, 15, 10);
        StarWarsRR = new Attraction("Star Wars: Rise of the Resistance", 1600000, false, 20, 6, 8);
        PiratesOfTheCaribbeanRide = new Attraction("Pirates of the Caribbean", 800000, false, 15, 6, 8);

        parking = new ThemeParkUpgrade(10000, "Parking");
        surveillance = new ThemeParkUpgrade(10000, "Surveillance");
        janitorialStaff = new ThemeParkUpgrade(10000, "Janitors");
        securityGuards = new ThemeParkUpgrade(10000, "Security");
        strollers = new ThemeParkUpgrade(10000, "Strollers");
        restrooms = new ThemeParkUpgrade(10000, "Restrooms");
        maintenanceStaff = new ThemeParkUpgrade(10000, "Maintenance");
        restaurants = new ThemeParkUpgrade(10000, "Restaurants");
        transportation = new ThemeParkUpgrade(10000, "Transportation");
        lockers = new ThemeParkUpgrade(10000, "Lockers");

        attractionsArr[0] = pumbaasFunAndGamesArcade;
        attractionsArr[1] = TwilightZoneRide;
        attractionsArr[2] = RocknRollerCoaster;
        attractionsArr[3] = JungleCruise;
        attractionsArr[4] = PiratesOfTheCaribbeanRide;
        attractionsArr[5] = StarWarsRR;

        marketingCampaignArr[0] = newspaperCampaign;
        marketingCampaignArr[1] = radioCampaign;
        marketingCampaignArr[2] = TVCampaign;
        marketingCampaignArr[3] = smartphoneCampaign;

        themeParkUpgradeArr[0] = parking;
        themeParkUpgradeArr[1] = surveillance;
        themeParkUpgradeArr[2] = janitorialStaff;
        themeParkUpgradeArr[3] = securityGuards;
        themeParkUpgradeArr[4] = strollers;
        themeParkUpgradeArr[5] = restrooms;
        themeParkUpgradeArr[6] = maintenanceStaff;
        themeParkUpgradeArr[7] = restaurants;
        themeParkUpgradeArr[8] = transportation;
        themeParkUpgradeArr[9] = lockers;

        badEventArr[0] = new BadEvent("Global Pandemic", 50000, true,false, "");
        badEventArr[1] = new BadEvent("Inclement Weather", 25000, true,false, "");
        badEventArr[2] = new BadEvent("Worker Strike",30000, true, false, "");
        badEventArr[3] = new BadEvent("Ride Breakdown",10000, false, false, attractionsArr[0].name);
        badEventArr[4] = new BadEvent("Theme Park is Dirty", 0, true, true, "");
        badEventArr[5] = new BadEvent("Theme Park is Unsafe", 0, true, true, "");
        badEventArr[6] = new BadEvent("Theme Park is not Family Friendly", 0, true, true, "");
        badEventArr[7] = new BadEvent("Not Enough Restrooms", 0, true, true, "");
        badEventArr[8] = new BadEvent("Theme Park is Dirty", 0, true, true, "");
        badEventArr[9] = new BadEvent("Theme Park needs lockers", 0, true, true, "");
        badEventArr[10] = new BadEvent("Theme Park needs transportation", 0, true, true, "");
        badEventArr[11] = new BadEvent("Not enough variety in food", 0, true, true, "");
        badEventArr[12] = new BadEvent("Theme Park needs better ride maintenance", 0, true, true, "");
    }

    public void playGame(){
        goalMoneyAmountStr = goalMoneyAmountText.getText();
        goalMoneyAmount = Integer.parseInt(goalMoneyAmountStr);
        goalMoneyAmountText.setVisible(false);
        playGameBtn.setVisible(false);
        tabPane.setVisible(true);
        arcadePriceLabel.setText("Price: $" + NumberFormat.getInstance().format(pumbaasFunAndGamesArcade.price));
        TOTPriceLabel.setText("Price: $" + NumberFormat.getInstance().format(TwilightZoneRide.price));
        rollercoasterPriceLabel.setText("Price: $" + NumberFormat.getInstance().format(RocknRollerCoaster.price));
        jungleCruisePriceLabel.setText("Price: $" + NumberFormat.getInstance().format(JungleCruise.price));
        piratesOfTheCaribbeanPriceLabel.setText("Price: $" + NumberFormat.getInstance().format(PiratesOfTheCaribbeanRide.price));
        RORPriceLabel.setText("Price: $" + NumberFormat.getInstance().format(StarWarsRR.price));
        totalCurrentCash = initialBankBalance;

        TOTImageView1.setDisable(true);
        rollercoasterImageView1.setDisable(true);
        jungleCruiseImageView1.setDisable(true);
        piratesOfTheCaribbeanImageView1.setDisable(true);
        RORImageView1.setDisable(true);
        TOTPriceLabel.setTextFill(Color.LIGHTGRAY);
        rollercoasterPriceLabel.setTextFill(Color.LIGHTGRAY);
        jungleCruisePriceLabel.setTextFill(Color.LIGHTGRAY);
        piratesOfTheCaribbeanPriceLabel.setTextFill(Color.LIGHTGRAY);
        RORPriceLabel.setTextFill(Color.LIGHTGRAY);

        TOTImageView1.setOpacity(0.25);
        rollercoasterImageView1.setOpacity(0.25);
        jungleCruiseImageView1.setOpacity(0.25);
        piratesOfTheCaribbeanImageView1.setOpacity(0.25);
        RORImageView1.setOpacity(0.25);
        arcadeImageView2.setDisable(true);
        TOTImageView2.setDisable(true);
        rollercoasterImageView2.setDisable(true);
        jungleCruiseImageView2.setDisable(true);
        piratesOfTheCaribbeanImageView2.setDisable(true);
        RORImageView2.setDisable(true);
        arcadeImageView2.setOpacity(0.25);
        TOTImageView2.setOpacity(0.25);
        rollercoasterImageView2.setOpacity(0.25);
        jungleCruiseImageView2.setOpacity(0.25);
        piratesOfTheCaribbeanImageView2.setOpacity(0.25);
        RORImageView2.setOpacity(0.25);
        currentRatingLabel1.setVisible(false);
        currentRatingLabel2.setVisible(false);
        currentRatingLabel3.setVisible(false);
        currentRatingLabel4.setVisible(false);
        currentRatingLabel5.setVisible(false);
        currentRatingLabel6.setVisible(false);
        currentRatingImageView1.setVisible(false);
        currentRatingImageView2.setVisible(false);
        currentRatingImageView3.setVisible(false);
        currentRatingImageView4.setVisible(false);
        currentRatingImageView5.setVisible(false);
        currentRatingImageView6.setVisible(false);
        seatsLabel1.setVisible(false);
        seatsLabel2.setVisible(false);
        seatsLabel3.setVisible(false);
        seatsLabel4.setVisible(false);
        seatsLabel5.setVisible(false);
        seatsLabel6.setVisible(false);
        queueLabel2.setVisible(false);
        queueLabel3.setVisible(false);
        queueLabel4.setVisible(false);
        queueLabel5.setVisible(false);
        queueLabel6.setVisible(false);
        ticketPriceLabel1.setVisible(false);
        ticketPriceLabel2.setVisible(false);
        ticketPriceLabel3.setVisible(false);
        ticketPriceLabel4.setVisible(false);
        ticketPriceLabel5.setVisible(false);
        ticketPriceLabel6.setVisible(false);
        yearlyCustomerCount1Label.setVisible(false);
        yearlyCustomerCount2Label.setVisible(false);
        yearlyCustomerCount3Label.setVisible(false);
        yearlyCustomerCount4Label.setVisible(false);
        yearlyCustomerCount5Label.setVisible(false);
        yearlyCustomerCount6Label.setVisible(false);
        increaseThrillLabel.setVisible(false);
        increaseThrillBtn.setVisible(false);
        increaseSeatingLabel.setVisible(false);
        increaseSeatingBtn.setVisible(false);
        increaseQueueLabel.setVisible(false);
        increaseQueueBtn.setVisible(false);
        startCampaignBtn.setVisible(false);
        startCampaignLabel.setVisible(false);

        displayGoalInfo();
    }

    public void doAttractionClicked(int index, ImageView img)
    {
        if (buyAttractionClickedArr[index] == false)
        {
            arcadeImageView1.setEffect(null);
            TOTImageView1.setEffect(null);
            rollercoasterImageView1.setEffect(null);
            jungleCruiseImageView1.setEffect(null);
            piratesOfTheCaribbeanImageView1.setEffect(null);
            RORImageView1.setEffect(null);

            for(int i = 0; i< buyAttractionClickedArr.length; i++)
            {
                buyAttractionClickedArr[i] = false;
            }

            buyAttractionClickedArr[index] = true;
            img.setEffect(new DropShadow());
            buyAttractionIndexSelected=index;
        }
        else
        {
            buyAttractionClickedArr[index] = false;
            img.setEffect(null);
        }
    }

    public void doUpgradeAttractionClicked(int index, ImageView img){
        if (upgradeAttractionClickedArr[index] == false)
        {
            arcadeImageView2.setEffect(null);
            TOTImageView2.setEffect(null);
            rollercoasterImageView2.setEffect(null);
            jungleCruiseImageView2.setEffect(null);
            piratesOfTheCaribbeanImageView2.setEffect(null);
            RORImageView2.setEffect(null);

            for(int i = 0; i< upgradeAttractionClickedArr.length; i++)
            {
                upgradeAttractionClickedArr[i] = false;
            }

            upgradeAttractionClickedArr[index] = true;
            img.setEffect(new DropShadow());
            increaseThrillLabel.setVisible(true);
            increaseThrillBtn.setVisible(true);
            increaseSeatingLabel.setVisible(true);
            increaseSeatingBtn.setVisible(true);
            increaseQueueLabel.setVisible(true);
            increaseQueueBtn.setVisible(true);
            upgradeAttractionIndexSelected=index;
            upgradeAttr = attractionsArr[upgradeAttractionIndexSelected];
        }
        else
        {
            upgradeAttractionClickedArr[index] = false;
            img.setEffect(null);
            increaseThrillLabel.setVisible(false);
            increaseThrillBtn.setVisible(false);
            increaseSeatingLabel.setVisible(false);
            increaseSeatingBtn.setVisible(false);
            increaseQueueLabel.setVisible(false);
            increaseQueueBtn.setVisible(false);
        }
    }

    public void attraction1Clicked() {
        doAttractionClicked(0,arcadeImageView1);
    }

    public void attraction2Clicked() {
        doAttractionClicked(1,TOTImageView1);
    }

    public void attraction3Clicked() {
        doAttractionClicked(2,rollercoasterImageView1);
    }

    public void attraction4Clicked() {
        doAttractionClicked(3,jungleCruiseImageView1);
    }

    public void attraction5Clicked() {
        doAttractionClicked(4,piratesOfTheCaribbeanImageView1);
    }

    public void attraction6Clicked() {
        doAttractionClicked(5,RORImageView1);
    }

    public void displayLoanInfo()
    {
        loanInfo.setText("Total Loan Amount: $"+ NumberFormat.getInstance().format((int)(initialLoan)) + "\nTotal Loan Payment Remaining (Principal + Interest): $" + NumberFormat.getInstance().format((int)(loanRemainingAmount)));
    }

    public void buildAttraction()
    {
        Attraction attr = attractionsArr[buyAttractionIndexSelected];

        if(attr.name.contains("Pumbaa")){
            totalCurrentCash = initialBankBalance;
            loanInfo.setVisible(true);

            downPayment = (attr.price * percentDownPayment) / 100;
            initialLoan = (int)(attr.price - downPayment);

            loanPrincipalToBePaid = initialLoan;
            loanInterestAmountToBePaid = ((initialLoan * annualPercentInterest)/100) * loanDurationInYears;
            yearlyLoanPaymentToBeMade = (loanPrincipalToBePaid + loanInterestAmountToBePaid) / loanDurationInYears;

            loanRemainingAmount = loanPrincipalToBePaid + loanInterestAmountToBePaid;
        }

        if(attr.name.equalsIgnoreCase("Pumbaa's Fun and Games Arcade"))
        {
            totalCurrentCash = totalCurrentCash - downPayment;
            currentAvailableCashVal.setText(NumberFormat.getInstance().format(totalCurrentCash));
        }
        else if(!attr.name.equalsIgnoreCase("Pumbaa's Fun and Games Arcade"))
        {
            totalCurrentCash = totalCurrentCash - attr.price;
        }

        attr.currentlyOwned = true;
        attr.unlocked=false;

        if(attr.name.equalsIgnoreCase("Pumbaa's Fun and Games Arcade") && attr.unlocked == false){
            arcadeImageView1.setDisable(true);
            arcadeImageView1.setOpacity(0.25);
            arcadePriceLabel.setText("Currently Owned");
        }
        if(attr.name.equalsIgnoreCase("Twilight Zone Tower of Terror") && attr.unlocked == false){
            TOTImageView1.setDisable(true);
            TOTImageView1.setOpacity(0.25);
            TOTPriceLabel.setText("Currently Owned");
        }
        if(attr.name.equalsIgnoreCase("Rock 'n' Roller Coaster") && attr.unlocked == false){
            rollercoasterImageView1.setDisable(true);
            rollercoasterImageView1.setOpacity(0.25);
            rollercoasterPriceLabel.setText("Currently Owned");
        }
        if(attr.name.equalsIgnoreCase("Jungle Cruise") && attr.unlocked == false){
            jungleCruiseImageView1.setDisable(true);
            jungleCruiseImageView1.setOpacity(0.25);
            jungleCruisePriceLabel.setText("Currently Owned");
        }
        if(attr.name.equalsIgnoreCase("Star Wars: Rise of the Resistance") && attr.unlocked == false){
            RORImageView1.setDisable(true);
            RORImageView1.setOpacity(0.25);
            RORPriceLabel.setText("Currently Owned");
        }
        if(attr.name.equalsIgnoreCase("Pirates of the Caribbean") && attr.unlocked == false){
            piratesOfTheCaribbeanImageView1.setDisable(true);
            piratesOfTheCaribbeanImageView1.setOpacity(0.25);
            piratesOfTheCaribbeanPriceLabel.setText("Currently Owned");
        }

        attractionsOwned.add(attr);

        unlockAvailableProperties();
        lockPropertiesForPurchase();

        for(int i = 0; i < attractionsOwned.size(); i++){
            if(attractionsOwned.get(i).name.equalsIgnoreCase("Pumbaa's Fun and Games Arcade") && attr.unlocked == false){
                arcadeImageView2.setDisable(false);
                arcadeImageView2.setOpacity(1.0);
                ticketPriceLabel1.setVisible(true);
                ticketPriceLabel1.setText("Ticket Price: $" + pumbaasFunAndGamesArcade.ticketPrice);
                seatsLabel1.setVisible(true);
                seatsLabel1.setText("Seating capacity: " + pumbaasFunAndGamesArcade.seatingCapacity);
                yearlyCustomerCount1Label.setVisible(true);
                yearlyCustomerCount1Label.setText("Yearly Customer Count: " + pumbaasFunAndGamesArcade.numYearlyCustomers);
                currentRatingLabel1.setVisible(true);
                currentRatingImageView1.setVisible(true);
            }
            else if(attractionsOwned.get(i).name.equalsIgnoreCase("Twilight Zone Tower of Terror") && attr.unlocked == false){
                TOTImageView2.setDisable(false);
                TOTImageView2.setOpacity(1.0);
                ticketPriceLabel2.setVisible(true);
                ticketPriceLabel2.setText("Ticket Price: $" + TwilightZoneRide.ticketPrice);
                seatsLabel2.setVisible(true);
                seatsLabel2.setText("Seating capacity: " + TwilightZoneRide.seatingCapacity);
                queueLabel2.setVisible(true);
                queueLabel2.setText("Queue capacity: " + TwilightZoneRide.queueCapacity);
                yearlyCustomerCount2Label.setVisible(true);
                yearlyCustomerCount2Label.setText("Yearly Customer Count: " + TwilightZoneRide.numYearlyCustomers);
                currentRatingLabel2.setVisible(true);
                currentRatingImageView2.setVisible(true);
            }
            else if(attractionsOwned.get(i).name.equalsIgnoreCase("Rock 'n' Roller Coaster") && attr.unlocked == false){
                rollercoasterImageView2.setDisable(false);
                rollercoasterImageView2.setOpacity(1.0);
                ticketPriceLabel3.setVisible(true);
                ticketPriceLabel3.setText("Ticket Price: $" + RocknRollerCoaster.ticketPrice);
                seatsLabel3.setVisible(true);
                seatsLabel3.setText("Seating capacity: " + RocknRollerCoaster.seatingCapacity);
                queueLabel3.setVisible(true);
                queueLabel3.setText("Queue capacity: " + RocknRollerCoaster.queueCapacity);
                yearlyCustomerCount3Label.setVisible(true);
                yearlyCustomerCount3Label.setText("Yearly Customer Count: " + RocknRollerCoaster.numYearlyCustomers);
                currentRatingLabel3.setVisible(true);
                currentRatingImageView3.setVisible(true);
            }
            else if(attractionsOwned.get(i).name.equalsIgnoreCase("Jungle Cruise") && attr.unlocked == false){
                jungleCruiseImageView2.setDisable(false);
                jungleCruiseImageView2.setOpacity(1.0);
                ticketPriceLabel4.setVisible(true);
                ticketPriceLabel4.setText("Ticket Price: $" + JungleCruise.ticketPrice);
                seatsLabel4.setVisible(true);
                seatsLabel4.setText("Seating capacity: " + JungleCruise.seatingCapacity);
                queueLabel4.setVisible(true);
                queueLabel4.setText("Queue capacity: " + JungleCruise.queueCapacity);
                yearlyCustomerCount4Label.setVisible(true);
                yearlyCustomerCount4Label.setText("Yearly Customer Count: " + JungleCruise.numYearlyCustomers);
                currentRatingLabel4.setVisible(true);
                currentRatingImageView4.setVisible(true);
            }
            else if(attractionsOwned.get(i).name.equalsIgnoreCase("Star Wars: Rise of the Resistance") && attr.unlocked == false){
                RORImageView2.setDisable(false);
                RORImageView2.setOpacity(1.0);
                ticketPriceLabel5.setVisible(true);
                ticketPriceLabel5.setText("Ticket Price: $" + StarWarsRR.ticketPrice);
                seatsLabel5.setVisible(true);
                seatsLabel5.setText("Seating capacity: " + StarWarsRR.seatingCapacity);
                queueLabel5.setVisible(true);
                queueLabel5.setText("Queue capacity: " + StarWarsRR.queueCapacity);
                yearlyCustomerCount5Label.setVisible(true);
                yearlyCustomerCount5Label.setText("Yearly Customer Count: " + StarWarsRR.numYearlyCustomers);
                currentRatingLabel5.setVisible(true);
                currentRatingImageView5.setVisible(true);
            }
            else if(attractionsOwned.get(i).name.equalsIgnoreCase("Pirates of the Caribbean") && attr.unlocked == false){
                piratesOfTheCaribbeanImageView2.setDisable(false);
                piratesOfTheCaribbeanImageView2.setOpacity(1.0);
                ticketPriceLabel6.setVisible(true);
                ticketPriceLabel6.setText("Ticket Price: $" + PiratesOfTheCaribbeanRide.ticketPrice);
                seatsLabel6.setVisible(true);
                seatsLabel6.setText("Seating capacity: " + PiratesOfTheCaribbeanRide.seatingCapacity);
                queueLabel6.setVisible(true);
                queueLabel6.setText("Queue capacity: " + PiratesOfTheCaribbeanRide.queueCapacity);
                yearlyCustomerCount6Label.setVisible(true);
                yearlyCustomerCount6Label.setText("Yearly Customer Count: " + PiratesOfTheCaribbeanRide.numYearlyCustomers);
                currentRatingLabel6.setVisible(true);
                currentRatingImageView6.setVisible(true);
            }
        }

        displayGoalInfo();
        displayLoanInfo();

        advanceYearBtn.setVisible(true);

    }

    public void unlockAvailableProperties(){
        if(yearNum > 0){
            if(allAttractionsUnlocked == false)
            {
                for(int i = 0; i < attractionsArr.length; i++)
                {
                    if((totalCurrentCash >= (attractionsArr[i].price + 50000)) && (attractionsArr[i].currentlyOwned == false))
                    {
                        attractionsArr[i].unlocked = true;
                    }
                    else
                    {
                        attractionsArr[i].unlocked = false;
                    }
                }

                if(TwilightZoneRide.unlocked == true)
                {
                    TOTImageView1.setDisable(false);
                    TOTImageView1.setOpacity(1.0);
                    TOTPriceLabel.setTextFill(Color.BLACK);
                }
                else if(TwilightZoneRide.currentlyOwned == false){
                    TOTImageView1.setDisable(true);
                    TOTImageView1.setOpacity(0.25);
                    TOTPriceLabel.setTextFill(Color.LIGHTGRAY);
                }

                if(RocknRollerCoaster.unlocked == true)
                {
                    rollercoasterImageView1.setDisable(false);
                    rollercoasterImageView1.setOpacity(1.0);
                    rollercoasterPriceLabel.setTextFill(Color.BLACK);
                }
                else if(RocknRollerCoaster.currentlyOwned == false)
                {
                    rollercoasterImageView1.setDisable(true);
                    rollercoasterImageView1.setOpacity(0.25);
                    rollercoasterPriceLabel.setTextFill(Color.LIGHTGRAY);
                }

                if(JungleCruise.unlocked == true)
                {
                    jungleCruiseImageView1.setDisable(false);
                    jungleCruiseImageView1.setOpacity(1.0);
                    jungleCruisePriceLabel.setTextFill(Color.BLACK);
                }
                else if(JungleCruise.currentlyOwned == false)
                {
                    jungleCruiseImageView1.setDisable(true);
                    jungleCruiseImageView1.setOpacity(0.25);
                    jungleCruisePriceLabel.setTextFill(Color.LIGHTGRAY);
                }

                if(PiratesOfTheCaribbeanRide.unlocked == true)
                {
                    piratesOfTheCaribbeanImageView1.setDisable(false);
                    piratesOfTheCaribbeanImageView1.setOpacity(1.0);
                    piratesOfTheCaribbeanPriceLabel.setTextFill(Color.BLACK);
                }
                else if(PiratesOfTheCaribbeanRide.currentlyOwned == false)
                {
                    piratesOfTheCaribbeanImageView1.setDisable(true);
                    piratesOfTheCaribbeanImageView1.setOpacity(0.25);
                    piratesOfTheCaribbeanPriceLabel.setTextFill(Color.LIGHTGRAY);
                }

                if(StarWarsRR.unlocked == true)
                {
                    RORImageView1.setDisable(false);
                    RORImageView1.setOpacity(1.0);
                    RORPriceLabel.setTextFill(Color.BLACK);
                }
                else if(StarWarsRR.currentlyOwned == false)
                {
                    RORImageView1.setDisable(true);
                    RORImageView1.setOpacity(0.25);
                    RORPriceLabel.setTextFill(Color.LIGHTGRAY);
                }
            }
        }
    }

    public void attraction1ClickedTab2(){
        doUpgradeAttractionClicked(0, arcadeImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(pumbaasFunAndGamesArcade.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(pumbaasFunAndGamesArcade.upgradeSeatsCost));
        increaseQueueLabel.setVisible(false);
        increaseQueueBtn.setVisible(false);
    }

    public void attraction2ClickedTab2(){
        doUpgradeAttractionClicked(1, TOTImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(TwilightZoneRide.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(TwilightZoneRide.upgradeSeatsCost));
        increaseQueueBtn.setText("$" + NumberFormat.getInstance().format(TwilightZoneRide.upgradeQueueCost));
    }

    public void attraction3ClickedTab2(){
        doUpgradeAttractionClicked(2, rollercoasterImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(RocknRollerCoaster.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(RocknRollerCoaster.upgradeSeatsCost));
        increaseQueueBtn.setText("$" + NumberFormat.getInstance().format(RocknRollerCoaster.upgradeQueueCost));
    }

    public void attraction4ClickedTab2(){
        doUpgradeAttractionClicked(3, jungleCruiseImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(JungleCruise.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(JungleCruise.upgradeSeatsCost));
        increaseQueueBtn.setText("$" + NumberFormat.getInstance().format(JungleCruise.upgradeQueueCost));
    }

    public void attraction5ClickedTab2(){
        doUpgradeAttractionClicked(4, piratesOfTheCaribbeanImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(PiratesOfTheCaribbeanRide.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(PiratesOfTheCaribbeanRide.upgradeSeatsCost));
        increaseQueueBtn.setText("$" + NumberFormat.getInstance().format(PiratesOfTheCaribbeanRide.upgradeQueueCost));
    }

    public void attraction6ClickedTab2(){
        doUpgradeAttractionClicked(5, RORImageView2);
        increaseThrillBtn.setText("$" + NumberFormat.getInstance().format(StarWarsRR.upgradeThrillCost));
        increaseSeatingBtn.setText("$" + NumberFormat.getInstance().format(StarWarsRR.upgradeSeatsCost));
        increaseQueueBtn.setText("$" + NumberFormat.getInstance().format(StarWarsRR.upgradeQueueCost));
    }

    public void increaseThrill(){
        if((totalCurrentCash - upgradeAttr.upgradeThrillCost) >= 0)
        {
            if(upgradeAttr.ticketPrice <= 30)
                upgradeAttr.ticketPrice += 5;

            totalCurrentCash -= upgradeAttr.upgradeThrillCost;
            currentAvailableCashVal.setText(NumberFormat.getInstance().format(totalCurrentCash));
            upgradeAttr.incrementUpgradedThrillCount();
            increaseThrillBtn.setText("$" + upgradeAttr.upgradeThrillCost);

            if(upgradeAttr.name.contains("Pumbaa"))
            {
                if(arcadeRating < 5)
                    arcadeRating++;

                updateRating(currentRatingImageView1, arcadeRating);
                yearlyCustomerCount1Label.setVisible(true);
                yearlyCustomerCount1Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Twilight"))
            {
                if(TOTRating < 5)
                    TOTRating++;

                updateRating(currentRatingImageView2, TOTRating);
                yearlyCustomerCount2Label.setVisible(true);
                yearlyCustomerCount2Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Rock"))
            {
                if(rollercoasterRating < 5)
                    rollercoasterRating++;

                updateRating(currentRatingImageView3, rollercoasterRating);
                yearlyCustomerCount3Label.setVisible(true);
                yearlyCustomerCount3Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Jungle"))
            {
                if(jungleCruiseRating < 5)
                    jungleCruiseRating++;

                updateRating(currentRatingImageView4, jungleCruiseRating);
                yearlyCustomerCount4Label.setVisible(true);
                yearlyCustomerCount4Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Pirates"))
            {
                if(piratesOfTheCaribbeanRating < 5)
                        piratesOfTheCaribbeanRating++;

                updateRating(currentRatingImageView5, piratesOfTheCaribbeanRating);
                yearlyCustomerCount5Label.setVisible(true);
                yearlyCustomerCount5Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Star"))
            {
                if(RORRating < 5)
                    RORRating++;

                updateRating(currentRatingImageView6, RORRating);
                yearlyCustomerCount6Label.setVisible(true);
                yearlyCustomerCount6Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }

            displayGoalInfo();

            notEnoughMoneyLabel.setVisible(true);
            notEnoughMoneyLabel.setText("Attraction's ticket price increased by $5 due to this upgrade!");
        }
        else{
            notEnoughMoneyLabel.setText("You do not have enough money to make this purchase!");
            notEnoughMoneyLabel.setVisible(true);
        }
    }

    public void increaseSeating(){
        if((totalCurrentCash - upgradeAttr.upgradeSeatsCost) >= 0)
        {
            totalCurrentCash -= upgradeAttr.upgradeSeatsCost;
            currentAvailableCashVal.setText(NumberFormat.getInstance().format(totalCurrentCash));
            upgradeAttr.incrementUpgradedSeatsCount();
            increaseSeatingBtn.setText("$" + upgradeAttr.upgradeSeatsCost);

            upgradeAttr.numYearlyCustomers += 50;
            upgradeAttr.seatingCapacity += 20;

            seatsLabel1.setText("Seating Capacity: " + pumbaasFunAndGamesArcade.seatingCapacity);
            seatsLabel2.setText("Seating Capacity: " + TwilightZoneRide.seatingCapacity);
            seatsLabel3.setText("Seating Capacity: " + RocknRollerCoaster.seatingCapacity);
            seatsLabel4.setText("Seating Capacity: " + JungleCruise.seatingCapacity);
            seatsLabel5.setText("Seating Capacity: " + PiratesOfTheCaribbeanRide.seatingCapacity);
            seatsLabel6.setText("Seating Capacity: " + StarWarsRR.seatingCapacity);

            if(upgradeAttr.name.contains("Pumbaa"))
            {
                arcadeRating++;
                updateRating(currentRatingImageView1, arcadeRating);
                yearlyCustomerCount1Label.setVisible(true);
                yearlyCustomerCount1Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Twilight"))
            {
                TOTRating++;
                updateRating(currentRatingImageView2, TOTRating);
                yearlyCustomerCount2Label.setVisible(true);
                yearlyCustomerCount2Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Rock"))
            {
                rollercoasterRating++;
                updateRating(currentRatingImageView3, rollercoasterRating);
                yearlyCustomerCount3Label.setVisible(true);
                yearlyCustomerCount3Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Jungle"))
            {
                jungleCruiseRating++;
                updateRating(currentRatingImageView4, jungleCruiseRating);
                yearlyCustomerCount4Label.setVisible(true);
                yearlyCustomerCount4Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Pirates"))
            {
                piratesOfTheCaribbeanRating++;
                updateRating(currentRatingImageView5, piratesOfTheCaribbeanRating);
                yearlyCustomerCount5Label.setVisible(true);
                yearlyCustomerCount5Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }
            else if(upgradeAttr.name.contains("Star"))
            {
                RORRating++;
                updateRating(currentRatingImageView6, RORRating);
                yearlyCustomerCount6Label.setVisible(true);
                yearlyCustomerCount6Label.setText("Yearly Customer Count: " + upgradeAttr.numYearlyCustomers);
            }

            displayGoalInfo();

            notEnoughMoneyLabel.setVisible(true);
            notEnoughMoneyLabel.setText("Yearly customer count for this attraction increased by 50 due to this upgrade!");

        }
        else{
            notEnoughMoneyLabel.setText("You do not have enough money to make this purchase!");
            notEnoughMoneyLabel.setVisible(true);
        }
    }

    public void increaseQueue(){
        if((totalCurrentCash - upgradeAttr.upgradeQueueCost >= 0)){
            totalCurrentCash -= upgradeAttr.upgradeQueueCost;
            currentAvailableCashVal.setText(NumberFormat.getInstance().format(totalCurrentCash));

            upgradeAttr.incrementUpgradedQueueCount();
            increaseQueueBtn.setText("$" + upgradeAttr.upgradeQueueCost);

            upgradeAttr.queueCapacity += 10;
            upgradeAttr.numYearlyCustomers += 25;

            queueLabel2.setText("Queue Capacity: " + TwilightZoneRide.queueCapacity);
            queueLabel3.setText("Queue Capacity: " + RocknRollerCoaster.queueCapacity);
            queueLabel4.setText("Queue Capacity: " + JungleCruise.queueCapacity);
            queueLabel5.setText("Queue Capacity: " + PiratesOfTheCaribbeanRide.queueCapacity);
            queueLabel6.setText("Queue Capacity: " + StarWarsRR.queueCapacity);

            displayGoalInfo();
            notEnoughMoneyLabel.setVisible(false);
        }
        else
        {
            notEnoughMoneyLabel.setText("You do not have enough money to make this purchase!");
            notEnoughMoneyLabel.setVisible(true);
        }
    }

    public void updateRating(ImageView img, int rating){
        if(rating == 2){
            img.setImage(ratingImg1);
        }
        else if(rating == 3){
            img.setImage(ratingImg2);
        }
        else if(rating == 4){
            img.setImage(ratingImg3);
        }
        else if(rating == 5){
            img.setImage(ratingImg4);
        }

        ticketPriceLabel1.setText("Ticket Price: $" + pumbaasFunAndGamesArcade.ticketPrice);
        ticketPriceLabel2.setText("Ticket Price: $" + TwilightZoneRide.ticketPrice);
        ticketPriceLabel3.setText("Ticket Price: $" + RocknRollerCoaster.ticketPrice);
        ticketPriceLabel4.setText("Ticket Price: $" + JungleCruise.ticketPrice);
        ticketPriceLabel5.setText("Ticket Price: $" + PiratesOfTheCaribbeanRide.ticketPrice);
        ticketPriceLabel6.setText("Ticket Price: $" + StarWarsRR.ticketPrice);
    }

    public void generateBadEvent()
    {
        int randomNumToDecideOccurenceOfBadEvent = (int)(Math.random() * 15);
        int randomNumForBadEvent = (int)(Math.random() * 4);
        int randomNumForAffectedRide = (int)(Math.random() * attractionsOwned.size());

        boolean badEventOccured = false;

        if(randomNumToDecideOccurenceOfBadEvent == 0 || randomNumToDecideOccurenceOfBadEvent == 1 || randomNumToDecideOccurenceOfBadEvent == 7)
        {
            if(randomNumForBadEvent == 0){
                badEvent = badEventArr[0];
                notEnoughMoneyLabel.setText(badEvent.name +" event occured. You lost $"+NumberFormat.getInstance().format(badEvent.revenueLoss)+"!");
                badEventOccured=true;
                notEnoughMoneyLabel.setVisible(true);
                numberToSubtractFromTotalCurrentCash = badEvent.revenueLoss;
                totalCurrentCash = totalCurrentCash - numberToSubtractFromTotalCurrentCash;
            }
            else if(randomNumForBadEvent == 1)
            {
                badEvent = badEventArr[1];
                notEnoughMoneyLabel.setText(badEvent.name +" event occured. You lost $"+NumberFormat.getInstance().format(badEvent.revenueLoss)+"!");
                badEventOccured=true;
                notEnoughMoneyLabel.setVisible(true);
                numberToSubtractFromTotalCurrentCash = badEvent.revenueLoss;
                totalCurrentCash = totalCurrentCash - numberToSubtractFromTotalCurrentCash;
            }
            else if(randomNumForBadEvent == 2)
            {
                badEvent = badEventArr[2];
                notEnoughMoneyLabel.setText(badEvent.name +" event occured. You lost $"+NumberFormat.getInstance().format(badEvent.revenueLoss)+"!");
                badEventOccured=true;
                notEnoughMoneyLabel.setVisible(true);
                numberToSubtractFromTotalCurrentCash = badEvent.revenueLoss;
                totalCurrentCash = totalCurrentCash - numberToSubtractFromTotalCurrentCash;
            }
            else if(randomNumForBadEvent == 3)
            {
                badEvent = badEventArr[3];
                badEvent.attractionAffected = attractionsOwned.get(randomNumForAffectedRide).name;
                attractionsOwned.get(randomNumForAffectedRide).yearlyCost = attractionsOwned.get(randomNumForAffectedRide).yearlyCost + badEvent.revenueLoss;
                notEnoughMoneyLabel.setVisible(true);
                numberToSubtractFromTotalCurrentCash = badEvent.revenueLoss;
            }

            displayGoalInfo();
        }
    }

    public void displayGoalInfo()
    {
        if(totalCurrentCash < goalMoneyAmount)
            goalMoneyRemaining = (int) (goalMoneyAmount - totalCurrentCash);
        else
            goalMoneyRemaining = 0;

        goalYearsRemaining = 20 - yearNum;

        currentAvailableCashVal.setVisible(true);
        currentAvailableCashVal.setText("Current Available Cash:    $"+NumberFormat.getInstance().format((int)(totalCurrentCash))+"\n\nGoal Money Amount:       $"+NumberFormat.getInstance().format(goalMoneyAmount) + "\nAmount To Reach Goal:   $" + NumberFormat.getInstance().format(goalMoneyRemaining) + "\nYears Left To Reach Goal: " + goalYearsRemaining);
    }

    public void generateCustomerFeedback()
    {
        int customerFeedbackNum1 = (int)(Math.random() * 10);
        int customerFeedbackNum2 = (int)(Math.random() * 10);

        while(customerFeedbackNum1 == customerFeedbackNum2)
        {
            customerFeedbackNum2 = (int)(Math.random() * 10);
        }

        customerFeedback1 = themeParkUpgradeArr[customerFeedbackNum1].name;
        customerFeedback2 = themeParkUpgradeArr[customerFeedbackNum2].name;
    }

    public void advanceYear()
    {
        yearNum++;
        yearLabel.setVisible(true);
        yearLabel.setText("Year: " + yearNum + ": Attractions Financials");
        attractionsFinancialsTable.setVisible(true);

        notEnoughMoneyLabel.setText("");
        notEnoughMoneyLabel.setVisible(false);

        startTimer();
        checkTimeElapsed();

        if(!won && !lost)
        {
            unlockAvailableProperties();
            lockPropertiesForPurchase();

            int feedBackMatchedCount = 0;

            if (yearNum != 0 && yearNum % 2 == 0)
            {
                generateCustomerFeedback();
                customerFeedbackLabel.setVisible(true);
                customerFeedbackLabel.setTextFill(Color.RED);
                customerFeedbackLabel.setText("Customers have complained about " + customerFeedback1 + " and " + customerFeedback2 + ". Perform those upgrades to increase customer satisfaction.");
            }
            else
            {
                customerFeedbackLabel.setVisible(false);
                customerFeedbackLabel.setText("");
            }

            if (customerFeedback1 != "" && customerFeedback2 != "" && yearNum % 2 > 0)
            {
                for (int i = 0; i < upgradesPerformed.size(); i++)
                {
                    if (customerFeedback1 == upgradesPerformed.get(i).name)
                    {
                        feedBackMatchedCount++;
                    }
                }

                for (int j = 0; j < upgradesPerformed.size(); j++)
                {
                    if (customerFeedback2 == upgradesPerformed.get(j).name)
                    {
                        feedBackMatchedCount++;
                    }
                }

                if (feedBackMatchedCount == 2)
                {
                    attractionGainedCustomers = 1000;

                    for (int k = 0; k < attractionsOwned.size(); k++)
                    {
                        attractionsOwned.get(k).numYearlyCustomers += attractionGainedCustomers;
                    }

                    notEnoughMoneyLabel.setVisible(true);
                    notEnoughMoneyLabel.setText("You gained " + attractionGainedCustomers + " customers for each of your attractions!");
                }
                else if (feedBackMatchedCount == 1)
                {
                    attractionGainedCustomers = 500;
                    for (int l = 0; l < attractionsOwned.size(); l++)
                    {
                        attractionsOwned.get(l).numYearlyCustomers += attractionGainedCustomers;
                    }

                    notEnoughMoneyLabel.setVisible(true);
                    notEnoughMoneyLabel.setText("You gained " + attractionGainedCustomers + " customers for each of your attractions!");
                }
                else
                {
                    attractionGainedCustomers = 1000;

                    for (int m = 0; m < attractionsOwned.size(); m++)
                    {
                        if (attractionsOwned.get(m).numYearlyCustomers >= attractionGainedCustomers)
                            attractionsOwned.get(m).numYearlyCustomers -= attractionGainedCustomers;
                    }

                    notEnoughMoneyLabel.setVisible(true);
                    notEnoughMoneyLabel.setText("You lost " + attractionGainedCustomers + " customers for each of your attractions since you did not perform the recommended upgrades!");
                }

                yearlyCustomerCount1Label.setText("Yearly Customer Count: " + pumbaasFunAndGamesArcade.numYearlyCustomers);
                yearlyCustomerCount2Label.setText("Yearly Customer Count: " + TwilightZoneRide.numYearlyCustomers);
                yearlyCustomerCount3Label.setText("Yearly Customer Count: " + RocknRollerCoaster.numYearlyCustomers);
                yearlyCustomerCount4Label.setText("Yearly Customer Count: " + JungleCruise.numYearlyCustomers);
                yearlyCustomerCount5Label.setText("Yearly Customer Count: " + PiratesOfTheCaribbeanRide.numYearlyCustomers);
                yearlyCustomerCount6Label.setText("Yearly Customer Count: " + StarWarsRR.numYearlyCustomers);

                customerFeedback1 = "";
                customerFeedback2 = "";
            }

            upgradesPerformed.clear();

            displayGoalInfo();
            displayLoanInfo();
        }
    }

    public void checkTimeElapsed()
    {
        timerExpired = false;
        generateBadEvent();

        while(!timerExpired)
        {
            if (LocalTime.now().compareTo(startTime.plusSeconds(2)) == 1)
            {

                double yearlyAttractionsIncome = calculateThemeParkNetYearlyIncome();
                totalCurrentCash = totalCurrentCash + yearlyAttractionsIncome;
                calculateLoanYearEndFinancials();

                unlockAvailableProperties();
                lockPropertiesForPurchase();

                displayGoalInfo();
                populateAttractionsFinancialsTable();

                timerExpired = true;
            }
        }

        checkWin();
    }

    public void lockPropertiesForPurchase()
    {
        for(int i = 0; i < attractionsArr.length; i++)
        {
            if((totalCurrentCash < (attractionsArr[i].price + 50000)) && !attractionsArr[i].currentlyOwned)
            {
                attractionsArr[i].unlocked = false;
            }
        }
    }

    public void doThemeParkUpgradeClicked(int index, ImageView img){
        if (upgradeThemeParkClickedArr[index] == false)
        {
            parkingImageView.setEffect(null);
            surveillanceImageView.setEffect(null);
            janitorialStaffImageView.setEffect(null);
            securityGuardsImageView.setEffect(null);
            strollerRentalsImageView.setEffect(null);
            restroomsImageView.setEffect(null);
            maintenanceStaffImageView.setEffect(null);
            restaurantsImageView.setEffect(null);
            transportationImageView.setEffect(null);
            lockerRoomsImageView.setEffect(null);

            for(int i = 0; i < upgradeThemeParkClickedArr.length; i++)
            {
                upgradeThemeParkClickedArr[i] = false;
            }

            upgradeThemeParkClickedArr[index] = true;
            img.setEffect(new DropShadow());
            themeParkUpgradeBtn.setVisible(true);
            upgradeThemeParkIndexSelected=index;
            upgradeThemeParkAspect = themeParkUpgradeArr[upgradeThemeParkIndexSelected];
        }
        else
        {
            upgradeThemeParkClickedArr[index] = false;
            img.setEffect(null);
            themeParkUpgradeBtn.setVisible(false);
        }
    }

    public void increaseParking(){
        doThemeParkUpgradeClicked(0, parkingImageView);
    }

    public void installSurveillance(){
        doThemeParkUpgradeClicked(1, surveillanceImageView);
    }

    public void hireJanitors(){
        doThemeParkUpgradeClicked(2, janitorialStaffImageView);
    }

    public void hireSecurity(){
        doThemeParkUpgradeClicked(3, securityGuardsImageView);
    }

    public void buildStrollerRentals(){
        doThemeParkUpgradeClicked(4, strollerRentalsImageView);
    }

    public void buildRestrooms(){
        doThemeParkUpgradeClicked(5, restroomsImageView);
    }

    public void hireMaintenance(){
        doThemeParkUpgradeClicked(6, maintenanceStaffImageView);
    }

    public void buildRestaurants(){
        doThemeParkUpgradeClicked(7, restaurantsImageView);
    }

    public void addShuttles(){
        doThemeParkUpgradeClicked(8, transportationImageView);
    }

    public void buildLockerRooms(){
        doThemeParkUpgradeClicked(9, lockerRoomsImageView);
    }


    public void purchaseUpgrade()
    {
        if(totalCurrentCash >= upgradeThemeParkAspect.upgradePrice)
        {
            upgradesPerformed.add(upgradeThemeParkAspect);
            totalCurrentCash -= upgradeThemeParkAspect.upgradePrice;
            displayGoalInfo();
            notEnoughMoneyLabel.setVisible(false);
        }
        else
        {
            notEnoughMoneyLabel.setText("You do not have enough money to perform this upgrade!");
            notEnoughMoneyLabel.setVisible(true);
        }
    }

    public void doMarketingCampaignClicked(int index, ImageView img)
    {
        if (marketingCampaignsArr[index] == false)
        {
            newspaperCampaignImageView.setEffect(null);
            radioCampaignImageView.setEffect(null);
            TVCampaignImageView.setEffect(null);
            smartphoneCampaignImageView.setEffect(null);

            for(int i = 0; i < marketingCampaignsArr.length; i++)
            {
                marketingCampaignsArr[i] = false;
            }

            marketingCampaignsArr[index] = true;
            img.setEffect(new DropShadow());
            startCampaignLabel.setVisible(true);
            startCampaignBtn.setVisible(true);
            marketingCampaignIndexSelected=index;
            marketingCampaign = marketingCampaignArr[marketingCampaignIndexSelected];
        }
        else
        {
            marketingCampaignsArr[index] = false;
            img.setEffect(null);
            startCampaignLabel.setVisible(false);
            startCampaignBtn.setVisible(false);
        }

        displayGoalInfo();
    }

    public void newspaperCampaignClicked(){
        doMarketingCampaignClicked(0, newspaperCampaignImageView);
        startCampaignBtn.setText("$" + newspaperCampaign.upgradePrice);
    }

    public void radioCampaignClicked(){
        doMarketingCampaignClicked(1, radioCampaignImageView);
        startCampaignBtn.setText("$" + radioCampaign.upgradePrice);
    }

    public void TVCampaignClicked(){
        doMarketingCampaignClicked(2, TVCampaignImageView);
        startCampaignBtn.setText("$" + TVCampaign.upgradePrice);
    }

    public void smartPhoneCampaignClicked(){
        doMarketingCampaignClicked(3, smartphoneCampaignImageView);
        startCampaignBtn.setText("$" + smartphoneCampaign.upgradePrice);
    }

    public void startCampaign(){
        if((totalCurrentCash - marketingCampaign.upgradePrice) >= 0)
        {
            totalCurrentCash -= marketingCampaign.upgradePrice;
            currentAvailableCashVal.setText(NumberFormat.getInstance().format(totalCurrentCash));

            if(marketingCampaign.name.equalsIgnoreCase("Newspaper"))
            {
                attractionGainedCustomers = 1000;

                for(int m = 0; m < attractionsOwned.size(); m++)
                {
                    attractionsOwned.get(m).numYearlyCustomers += attractionGainedCustomers;
                }
            }
            else if(marketingCampaign.name.equalsIgnoreCase("Radio"))
            {
                attractionGainedCustomers = 2000;

                for(int m = 0; m < attractionsOwned.size(); m++)
                {
                    attractionsOwned.get(m).numYearlyCustomers += attractionGainedCustomers;
                }
            }
            else if(marketingCampaign.name.equalsIgnoreCase("TV"))
            {
                attractionGainedCustomers = 3000;

                for(int m = 0; m < attractionsOwned.size(); m++)
                {
                    attractionsOwned.get(m).numYearlyCustomers += attractionGainedCustomers;
                }
            }
            else if(marketingCampaign.name.equalsIgnoreCase("Smartphone"))
            {
                attractionGainedCustomers = 4000;

                for(int m = 0; m < attractionsOwned.size(); m++)
                {
                    attractionsOwned.get(m).numYearlyCustomers += attractionGainedCustomers;
                }
            }

            notEnoughMoneyLabel.setVisible(true);
            notEnoughMoneyLabel.setText("Each of your attractions will gain "+ attractionGainedCustomers + " customers coming year as a result of the marketing campaign!");

            yearlyCustomerCount1Label.setText("Yearly Customer Count: " + pumbaasFunAndGamesArcade.numYearlyCustomers);
            yearlyCustomerCount2Label.setText("Yearly Customer Count: " + TwilightZoneRide.numYearlyCustomers);
            yearlyCustomerCount3Label.setText("Yearly Customer Count: " + RocknRollerCoaster.numYearlyCustomers);
            yearlyCustomerCount4Label.setText("Yearly Customer Count: " + JungleCruise.numYearlyCustomers);
            yearlyCustomerCount5Label.setText("Yearly Customer Count: " + PiratesOfTheCaribbeanRide.numYearlyCustomers);
            yearlyCustomerCount6Label.setText("Yearly Customer Count: " + StarWarsRR.numYearlyCustomers);

            displayGoalInfo();
        }
        else
        {
            notEnoughMoneyLabel.setText("You do not have enough money to run this marketing campaign!");
            notEnoughMoneyLabel.setVisible(true);
        }
    }

    public void startTimer()
    {
        startTime = LocalTime.now();
    }

    //Compares totalCurrentCash against the goalamount that the player entered to check if the player has accumulated cash equivalent to or more than the goal amount and if yes, then the player has won the game
    public boolean checkWin()
    {
        won = false;

        if((int)(totalCurrentCash) >= goalMoneyAmount && !dontShowWon && yearNum <= 20)
        {
            won = true;
            dontShowWon=true;
            notEnoughMoneyLabel.setVisible(true);
            notEnoughMoneyLabel.setTextFill(Color.GREEN);
            notEnoughMoneyLabel.setText("You reached your goal of earning $"+goalMoneyAmount+" in " + yearNum + " years. You won!!!");

            advanceYearBtn.setVisible(false);
            buildAttractionBtn.setVisible(false);
            increaseThrillBtn.setVisible(false);
            increaseSeatingBtn.setVisible(false);
            increaseQueueBtn.setVisible(false);
            startCampaignBtn.setVisible(false);
            advanceYearBtn.setVisible(false);
            themeParkUpgradeBtn.setVisible(false);
            increaseThrillLabel.setVisible(false);
            increaseSeatingLabel.setVisible(false);
            increaseQueueLabel.setVisible(false);

        }
        else if((int)(totalCurrentCash) < goalMoneyAmount && yearNum == 20)
        {
            lost = true;
            notEnoughMoneyLabel.setVisible(true);
            notEnoughMoneyLabel.setTextFill(Color.RED);
            notEnoughMoneyLabel.setText("You did not reach your goal of earning $"+goalMoneyAmount+" in " + yearNum + " years. You lost!!!");

            advanceYearBtn.setVisible(false);
            buildAttractionBtn.setVisible(false);
            increaseThrillBtn.setVisible(false);
            increaseSeatingBtn.setVisible(false);
            increaseQueueBtn.setVisible(false);
            startCampaignBtn.setVisible(false);
            advanceYearBtn.setVisible(false);
            themeParkUpgradeBtn.setVisible(false);
            increaseThrillLabel.setVisible(false);
            increaseSeatingLabel.setVisible(false);
            increaseQueueLabel.setVisible(false);
        }

        return won;
    }

    public double calculateThemeParkNetYearlyIncome()
    {
        yearlyIncomeFromAllAttractions = 0;

        for(int i=0; i < attractionsArr.length; i++)
        {
            if(attractionsArr[i].currentlyOwned)
            {
                yearlyIncomeFromAllAttractions += attractionsArr[i].calculateAttractionYearEndProfit();
            }
        }

        yearlyNetIncome = yearlyIncomeFromAllAttractions;

        cumulativeNetIncome += yearlyNetIncome;

        return yearlyNetIncome;
    }

    public double calculateLoanYearEndFinancials()
    {
        if(loanRemainingAmount < yearlyLoanPaymentToBeMade && totalCurrentCash >= loanRemainingAmount)
        {
            loanRemainingAmount = 0;
            totalCurrentCash = totalCurrentCash - loanRemainingAmount;
        }
        else
        {
            if (totalCurrentCash >= yearlyLoanPaymentToBeMade)
            {
                loanRemainingAmount = loanRemainingAmount - yearlyLoanPaymentToBeMade;
                totalCurrentCash = totalCurrentCash - yearlyLoanPaymentToBeMade;
            }
            //Penalty for missing a loan payment, totalCurrentCash does not change
            else
            {
                loanRemainingAmount = loanRemainingAmount + 5000;
                notEnoughMoneyLabel.setVisible(true);
                notEnoughMoneyLabel.setText("You do not have enough money to make loan payment. $5000 penalty charged and loan payments rolled over to next year!");
            }
        }

        return yearlyLoanPaymentToBeMade;
    }

    public void populateAttractionsFinancialsTable()
    {
        final ObservableList<Attraction> tableData = FXCollections.observableArrayList(attractionsOwned);

        attractionCol.setCellValueFactory(new PropertyValueFactory<Attraction, String>("nm"));
        attractionRevCol.setCellValueFactory(new PropertyValueFactory<Attraction, Integer>("annualRevenue"));
        attractionCostCol.setCellValueFactory(new PropertyValueFactory<Attraction, Integer>("annualCost"));
        attractionProfitCol.setCellValueFactory(new PropertyValueFactory<Attraction, Integer>("annualProfit"));

        attractionsFinancialsTable.setItems(tableData);
        attractionsFinancialsTable.refresh();
    }
}