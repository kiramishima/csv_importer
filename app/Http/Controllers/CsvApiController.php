<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\CustomAttribute;
use App\Traits\UploadFileTrait;
use Archon\DataFrame;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\HTTPResponses;
use \Carbon_CSV\CsvFile;
use \Carbon_CSV\Exception as CsvException;

class CsvApiController extends Controller
{
    use UploadFileTrait;

    /**
     * @OA\Get(
     *     path="/api/v1/file/{filename}",
     *     operationId="GetFileInfo",
     *     tags={"Upload", "CSV"},
     *     summary="Allow upload a CSV File",
     *     security={{"authentication":{}}},
     *     description="Allow upload a CSV File that contain all the information.",
     *     @OA\Parameter(
     *          name="filename",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="string"
     *          ),
     *          description="Filename",
     * 	   ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Success")
     *     ),
     *     @OA\Response(
     *         response="400",
     *         description="Invalid credentials",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     ),
     *     @OA\Response(
     *         response="500",
     *         description="Couldn't Create Token",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function getFileData($filename) {
        try {
            Log::info($filename);
            // $file = Storage::get("public/csv/{$filename}");
            // Log::info($file);
            $storagePath  = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
            // Log::info($storagePath);
            $file2 = "public/csv/{$filename}";
            // Log::info($file2);
            $path = $storagePath.$file2;
            // Log::info($path);
            $df = DataFrame::fromCSV($path, [
                'sep' => ','
            ]);
            // $csv = new CsvFile($path);
            // $csv->use_first_row_as_header();
            return response()->json([
                'status' => true,
                'data' => [
                    'columns' => $df->columns(),
                    'total' => $df->count()
                ]
            ]);
        }  catch (CsvException $e) {
            return response()->json([
                'status' => false,
                'error' => "Couldn't parse CSV file: " . $e->getMessage()
            ], 500);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'error' => 'has_internal_error'
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/file/{filename}/sample",
     *     operationId="GetSampleRemap",
     *     tags={"Upload", "CSV"},
     *     summary="Get preview remap",
     *     security={{"authentication":{}}},
     *     description="Get an sample before remap the data.",
     *     @OA\Parameter(
     *          name="filename",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="string"
     *          ),
     *          description="Filename",
     * 	   ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Success")
     *     ),
     *     @OA\Response(
     *         response="400",
     *         description="Invalid credentials",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     ),
     *     @OA\Response(
     *         response="500",
     *         description="Couldn't Create Token",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function getSampleData($filename, Request $request) {
        try {
            // Log::info($filename);
            // $file = Storage::get("public/csv/{$filename}");
            // Log::info($file);
            $storagePath  = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
            // Log::info($storagePath);
            $file2 = "public/csv/{$filename}";
            // Log::info($file2);
            $path = $storagePath.$file2;
            // Log::info($path);
            $df = DataFrame::fromCSV($path, [
                'sep' => ','
            ]);
            //
            $columns = $df->columns();
            $data = json_decode($request->input('remap'), JSON_OBJECT_AS_ARRAY);
            foreach ($data as $key => $value) {
                Log::info($key);
                Log::info($value);
                Log::info(gettype($value));
                if (gettype($value) != "array") {
                    foreach ($columns as $item) {
                        if($item == $key) {
                            $df->renameColumn($item , $value);
                        }
                    }
                } else {
                    Log::info($key);
                    foreach ($columns as $item) {
                        if($item == $key) {
                            $keys = array_keys($value);
                            if(count($keys) > 0) {
                                $df->renameColumn($item , $keys[0]);
                            }
                        }
                    }
                }
            }
            return response()->json([
                'status' => true,
                'data' => $df->toArray()[0]
            ]);
        }  catch (CsvException $e) {
            return response()->json([
                'status' => false,
                'error' => "Couldn't parse CSV file: " . $e->getMessage()
            ], 500);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'error' => 'has_internal_error'
            ], 500);
        }
    }
    /**
     * @OA\Post(
     *     path="/api/v1/upload_csv",
     *     operationId="UploadCSV",
     *     tags={"Upload", "CSV"},
     *     summary="Allow upload a CSV File",
     *     description="Allow upload a CSV File that contain all the information.",
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(
     *                      property="csvfile",
     *                      description="CSV File.",
     *                      type="string",
     *                      format="binary"
     *                  ),
     *              ),
     *          )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Success")
     *     ),
     *     @OA\Response(
     *         response="400",
     *         description="Invalid credentials",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     ),
     *     @OA\Response(
     *         response="500",
     *         description="Couldn't Create Token",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    function upload_csv_file(Request $request) {
        try {
            $file = $this->uploadCSVFile($request, 'csvfile');
            return response()->json([
                'status' => true,
                'data' => ['file' => $file]
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'error' => 'has_internal_error'
            ], 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/v1/file/{filename}/save",
     *     operationId="SaveReMap",
     *     tags={"Upload", "CSV"},
     *     summary="Allow upload a CSV File",
     *     description="Allow upload a CSV File that contain all the information.",
     *     @OA\Parameter(
     *          name="filename",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="string"
     *          ),
     *          description="Filename",
     * 	   ),
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(
     *                      property="remap",
     *                      description="Info for Remap",
     *                      type="string"
     *                  ),
     *              ),
     *          )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Success")
     *     ),
     *     @OA\Response(
     *         response="400",
     *         description="Invalid credentials",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     ),
     *     @OA\Response(
     *         response="500",
     *         description="Couldn't Create Token",
     *         @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    function remapAndSave($filename, Request $request) {
        try {
            // Getting CSV Columns
            $storagePath  = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
            // Log::info($storagePath);
            $file2 = "public/csv/{$filename}";
            // Log::info($file2);
            $path = $storagePath.$file2;
            // Log::info($path);
            $df = DataFrame::fromCSV($path, [
                'sep' => ','
            ]);
            $columns = $df->columns();
            $remap = [];
            $customs = [];
            $data = json_decode($request->input('remap'), JSON_OBJECT_AS_ARRAY);
            foreach ($data as $key => $value) {
                // Log::info($key);
                // Log::info($value);
                // Log::info(gettype($value));
                if (gettype($value) != "array") {
                    foreach ($columns as $item) {
                        if($item == $key) {
                            $df->renameColumn($item , $value);
                        }
                    }
                } else {
                    Log::info($key);
                    foreach ($columns as $item) {
                        if($item == $key) {
                            $keys = array_keys($value);
                            if(count($keys) > 0) {
                                $df->renameColumn($item , $keys[0]);
                            }
                        }
                    }
                }
            }
            // Finish Remap Dataframe
            $teamId = Contact::distinct('team_id')->count();
            // Log::info($teamId);
            $strategy = $request->input('duplicate_strategy', 1);
            foreach ($df->toArray() as $item) {
                // Log::info($item);
                $keys = array_keys($item);
                $input = ['team_id' => $teamId, 'name' => '', 'email' => '', 'sticky_phone_number_id' => null, 'phone' => ''];
                $customInput = [];
                if($strategy == 1) {
                    // Fill empty fields
                    foreach($keys as $key) {
                        if($key == "First Name") {
                            if($item[$key] != "") {
                                $input['name'] = $item[$key];
                            }
                        }elseif ($key == "Email") {
                            if($item[$key] != "") {
                                $input['email'] = $item[$key];
                            }
                        }elseif ($key == "Sticky Phone") {
                            if($item[$key] != "") {
                                $input['sticky_phone_number_id'] = $item[$key];
                            }
                        }elseif($key == "Phone") {
                            if($item[$key] != "") {
                                $input['phone'] = $item[$key];
                            }
                        } else {
                            $customInput[] = ["key" => $key, "value" => $item[$key]];
                        }
                    }
                    $contact = Contact::updateOrCreate(['email' => $input['email']], $input);
                    CustomAttribute::where(['contact_id' => $contact->id])->delete();
                    foreach ($customInput as $customItem) {
                        $customItem['contact_id'] = $contact->id;
                        $custom = CustomAttribute::create($customItem);
                    }
                } elseif ($strategy == 2) {
                    // Update all fields
                    foreach($keys as $key) {
                        if($key == "First Name") {
                            $input['name'] = $item[$key];
                        }elseif ($key == "Email") {
                            $input['email'] = $item[$key];
                        }elseif ($key == "Sticky Phone") {
                            $input['sticky_phone_number_id'] = $item[$key];
                        }elseif($key == "Phone") {
                            $input['phone'] = $item[$key];
                        } else {
                            $customInput[] = ["key" => $key, "value" => $item[$key]];
                        }
                    }
                    $contact = Contact::updateOrCreate(['email' => $input['email']], $input);
                    CustomAttribute::where(['contact_id' => $contact->id])->delete();
                    foreach ($customInput as $customItem) {
                        $customItem['contact_id'] = $contact->id;
                        $custom = CustomAttribute::create($customItem);
                    }
                } else {
                    // No modify, only insert
                    foreach($keys as $key) {
                        if($key == "First Name") {
                            $input['name'] = $item[$key];
                        }elseif ($key == "Email") {
                            $input['email'] = $item[$key];
                        }elseif ($key == "Sticky Phone") {
                            $input['sticky_phone_number_id'] = $item[$key];
                        }elseif($key == "Phone") {
                            $input['phone'] = $item[$key];
                        } else {
                            $customInput[] = ["key" => $key, "value" => $item[$key]];
                        }
                    }
                    $contact = Contact::create($input);
                    foreach ($customInput as $customItem) {
                        $customItem['contact_id'] = $contact->id;
                        $custom = CustomAttribute::create($customItem);
                    }
                }

            }
            return response()->json([
                'status' => true,
                'data' => $df->toArray()
            ]);
        } catch (\Exception $ex) {
            Log::error($ex->getMessage());
            return response()->json([
                'status' => false,
                'error' => 'has_internal_error'
            ], 500);
        }
    }
}
