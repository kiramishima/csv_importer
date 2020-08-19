<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(
 *      schema="Error",
 *      @OA\Property(
 *          property="status",
 *          type="boolean",
 *          description="Status"
 *      ),
 *      @OA\Property(
 *          property="message",
 *          type="string",
 *          description="Message"
 *      )
 * )
 */

/**
 * @OA\Schema(
 *      schema="Success",
 *      @OA\Property(
 *          property="status",
 *          type="boolean",
 *          description="Status"
 *      ),
 *      @OA\Property(
 *          property="data",
 *          type="object",
 *          description="Data"
 *      )
 * )
 */

class HTTPResponses extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
