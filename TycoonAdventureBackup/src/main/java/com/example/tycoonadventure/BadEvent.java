package com.example.tycoonadventure;

public class BadEvent {
    public String name = "";
    public int revenueLoss;
    public boolean themePark;
    public boolean custSatisfctionEvent;
    public String attractionAffected;

    public BadEvent(String n, int rl, boolean tp, boolean cs, String aa){
        name = n;
        revenueLoss = rl;
        themePark = tp;
        custSatisfctionEvent = cs;
        attractionAffected = aa;
    }
}
