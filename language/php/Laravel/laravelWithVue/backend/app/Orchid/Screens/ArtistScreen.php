<?php

namespace App\Orchid\Screens;

use App\Models\Artist;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Upload;
use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class ArtistScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'artists' => Artist::all()
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'ArtistScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            ModalToggle::make('Create group')
                ->modal('groupModal')
                ->method('create')
                ->icon('bs.brush-fill')
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            Layout::table('artists', [
                TD::make('username', 'Username'),
                TD::make('full_name', 'Name'),
                TD::make('photo')
                    ->render(function (Artist $artist) {
                        return view('image', [
                            'image' => $artist -> photo
                        ]);
                    })
            ]),

            Layout::modal('groupModal', Layout::rows([
                Input::make('username')->title('Username')->placeholder('input artist nick'),
                Input::make('full_name')->title('Name')->placeholder('input artist name'),
                Picture::make('photo')
                    ->storage('photos')
            ]))
        ];
    }

    public function create (Request $request) {
        $artist = $request->validate([
            'username' => 'required|min:3',
            'full_name' => 'required|min:3',
            'photo' => 'required'
        ]);

        Artist::create($artist);

        Alert::message('Successfully created artist');
    }
}
