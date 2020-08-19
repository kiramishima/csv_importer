<?php


namespace App\Traits;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Illuminate\Http\Request;

trait UploadFileTrait {

    public function uploadCSVFile(Request $request, $fileInputName) {

        if( $request->hasFile( $fileInputName ) ) {
            $filenameWithExt = $request->file($fileInputName)->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file($fileInputName)->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            $request->file($fileInputName)->storeAs("public/csv", $fileNameToStore);
            // Get the metadata
            return $fileNameToStore;
        } else {
            throw new FileException("Need upload a CSV File");
        }

    }
}
