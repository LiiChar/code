<?php

namespace App\Orchid\Screens;

use Orchid\Screen\Screen;

use App\Models\Сomposer;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Layout;

class ComposerScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'composers' => Сomposer::all()
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'ComposerScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            ModalToggle::make('Add composer')
                ->modal('composerModal')
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
            Layout::table('composers', [
                TD::make('username', 'Username'),
                TD::make('full_name', 'Name'),
                TD::make('about', 'About'),
                TD::make('photo')
                    ->render(function (Сomposer $composer) {
                        return view('image', [
                            'image' => $composer->photo
                        ]);
                    })
            ]),

            Layout::modal('composerModal', Layout::rows([
                Input::make('username')->title('Username')->placeholder('input composer nick'),
                Input::make('full_name')->title('Name')->placeholder('input composer name'),
                Input::make('about')->title('About')->placeholder('input composer about'),
                Picture::make('photo')
                    ->storage('photos')
            ]))
        ];
    }

    public function create(Request $request)
    {
        $composer = $request->validate([
            'username' => 'required|min:3',
            'full_name' => 'required|min:3',
            'about' => 'required',
        ]);

        $composer['photo'] = $request->photo ? $request->photo : '';

        Сomposer::create($composer);

        Alert::message('Successfully created composer');
    }
}
