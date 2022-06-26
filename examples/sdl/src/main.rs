use boytacean::gb::GameBoy;

fn main() {
    let mut game_boy = GameBoy::new();
    game_boy.load_boot_default();

    for _ in 0..40000 {
        game_boy.clock();
    }
}