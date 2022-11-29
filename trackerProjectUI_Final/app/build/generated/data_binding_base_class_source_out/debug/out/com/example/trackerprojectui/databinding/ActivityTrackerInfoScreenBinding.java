// Generated by view binder compiler. Do not edit!
package com.example.trackerprojectui.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.trackerprojectui.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityTrackerInfoScreenBinding implements ViewBinding {
  @NonNull
  private final ConstraintLayout rootView;

  @NonNull
  public final TextView locationDateLabel;

  @NonNull
  public final TextView locationNameLabel;

  @NonNull
  public final TextView locationRatingLabel;

  @NonNull
  public final TextView locationTypeLabel;

  @NonNull
  public final ListView savedLocationsListview;

  private ActivityTrackerInfoScreenBinding(@NonNull ConstraintLayout rootView,
      @NonNull TextView locationDateLabel, @NonNull TextView locationNameLabel,
      @NonNull TextView locationRatingLabel, @NonNull TextView locationTypeLabel,
      @NonNull ListView savedLocationsListview) {
    this.rootView = rootView;
    this.locationDateLabel = locationDateLabel;
    this.locationNameLabel = locationNameLabel;
    this.locationRatingLabel = locationRatingLabel;
    this.locationTypeLabel = locationTypeLabel;
    this.savedLocationsListview = savedLocationsListview;
  }

  @Override
  @NonNull
  public ConstraintLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityTrackerInfoScreenBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityTrackerInfoScreenBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_tracker_info_screen, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityTrackerInfoScreenBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.locationDateLabel;
      TextView locationDateLabel = ViewBindings.findChildViewById(rootView, id);
      if (locationDateLabel == null) {
        break missingId;
      }

      id = R.id.locationNameLabel;
      TextView locationNameLabel = ViewBindings.findChildViewById(rootView, id);
      if (locationNameLabel == null) {
        break missingId;
      }

      id = R.id.locationRatingLabel;
      TextView locationRatingLabel = ViewBindings.findChildViewById(rootView, id);
      if (locationRatingLabel == null) {
        break missingId;
      }

      id = R.id.locationTypeLabel;
      TextView locationTypeLabel = ViewBindings.findChildViewById(rootView, id);
      if (locationTypeLabel == null) {
        break missingId;
      }

      id = R.id.savedLocationsListview;
      ListView savedLocationsListview = ViewBindings.findChildViewById(rootView, id);
      if (savedLocationsListview == null) {
        break missingId;
      }

      return new ActivityTrackerInfoScreenBinding((ConstraintLayout) rootView, locationDateLabel,
          locationNameLabel, locationRatingLabel, locationTypeLabel, savedLocationsListview);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}