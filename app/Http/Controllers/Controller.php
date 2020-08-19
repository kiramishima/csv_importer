<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *     description="Import Contacts",
 *     version="1.0.0",
 *     title="Import Contacts Endpoints",
 *     termsOfService="http://github.com/terms/",
 *     @OA\Contact(
 *         email="kiramishima@outlook.com"
 *     ),
 *     @OA\License(
 *         name="Apache 2.0",
 *         url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *     ),
 *     @OA\Server(
 *         description="OpenApi host",
 *         url="https://petstore.swagger.io/v3"
 *     ),
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
