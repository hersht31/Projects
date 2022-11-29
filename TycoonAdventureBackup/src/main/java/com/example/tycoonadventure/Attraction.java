package com.example.tycoonadventure;

import javafx.beans.property.SimpleDoubleProperty;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.property.SimpleStringProperty;

public class Attraction
{
    public String name;
    public int price;

    public int yearlyCost;
    public int yearlyRevenue;
    public int yearlyProfit;
    public boolean currentlyOwned;
    public boolean unlocked;
    public int upgradedThrillCount = 0;
    public int upgradedSeatsCount = 0;
    public int upgradedQueueCount = 0;
    public int numYearlyCustomers;
    public int ticketPrice;
    public int seatingCapacity;
    public int queueCapacity;
    public int currentRating;
    public  int upgradeThrillCost;
    public int upgradeSeatsCost;
    public int upgradeQueueCost;
    public boolean offline;

    public SimpleStringProperty nm;
    public SimpleIntegerProperty annualCost;
    public SimpleIntegerProperty annualRevenue;
    public SimpleIntegerProperty annualProfit;

    public Attraction(String n, int p, boolean unl, int tp, int sc, int qc)
    {
        name = n;
        price = p;
        unlocked=unl;
        upgradeThrillCost = (int)((price * 2 * (upgradedThrillCount+1)) /100);
        upgradeSeatsCost = (int)((price * (Math.pow(upgradeSeatsCost+1, 2)))/100);
        upgradeQueueCost = (int)((price * (upgradedQueueCount+3))/100);
        ticketPrice = tp;
        seatingCapacity = sc;
        queueCapacity = qc;
        numYearlyCustomers=2500;
        currentRating = 1;

        nm = new SimpleStringProperty(n);
    }

    public String getNm()
    {
        return nm.get();
    }

    public Integer getAnnualCost()
    {
        return yearlyCost;
    }
    public Integer getAnnualRevenue()
    {
        return yearlyRevenue;
    }
    public Integer getAnnualProfit()
    {
        return yearlyProfit;
    }


    //Calculates yearly profit for this attraction.  Revenue and Cost are set randomly.
    public int calculateAttractionYearEndProfit()
    {
        if(name.contains("Pumbaa"))
        {
            yearlyRevenue= (int)(((Math.random()*5)+8) * price)/100;
        }
        else
        {
            if(offline == true)
                yearlyRevenue = 0;
            else
                yearlyRevenue = (int)((ticketPrice * (numYearlyCustomers * (((Math.random()*4) + 1)))));
        }

        if(offline == true)
            yearlyCost = 0;
        else
            yearlyCost = (2 * price)/100;

        yearlyProfit=(int)((yearlyRevenue-yearlyCost)*0.85);

        /*cumulativeRevenue.set(cumulativeRevenue.get() + yearlyRevenue);
        cumulativeCost.set(cumulativeCost.get() + yearlyCost);
        cumulativeProfit.set(cumulativeProfit.get()+ yearlyProfit);
        */

        return yearlyProfit;
    }

    public void incrementUpgradedThrillCount()
    {
        upgradedThrillCount++;
        upgradeThrillCost = (price * 5 * (upgradedThrillCount+1))/100;
    }

    public void incrementUpgradedSeatsCount(){
        upgradedSeatsCount++;
        upgradeSeatsCost = (int)((price * (Math.pow(upgradedSeatsCount+1, 2)))/100);
    }

    public void incrementUpgradedQueueCount(){
        upgradedQueueCount++;
        upgradeQueueCost = (price * (upgradedQueueCount+5))/100;
    }
}
